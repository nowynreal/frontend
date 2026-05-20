create extension if not exists "pgcrypto";

create table if not exists companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text,
  country text,
  website text,
  contact_person text,
  contact_email text,
  phone text,
  status text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists profiles (
  id uuid primary key references auth.users on delete cascade,
  role text not null default 'client' check (role in ('admin', 'team_member', 'client')),
  full_name text,
  company_id uuid references companies(id),
  created_at timestamptz not null default now()
);

create table if not exists team_members (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete set null,
  role_title text,
  region text,
  created_at timestamptz not null default now()
);

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  company_name text not null,
  email text not null,
  phone text,
  country text,
  industry text,
  website text,
  product_type text,
  desired_service text,
  current_stage text,
  message text,
  status text not null default 'new' check (
    status in (
      'new',
      'contacted',
      'discovery_scheduled',
      'proposal_sent',
      'won',
      'lost'
    )
  ),
  assigned_team_member_id uuid references team_members(id),
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references companies(id) on delete cascade,
  client_user_id uuid references auth.users,
  service_type text not null,
  status text not null default 'onboarding' check (
    status in (
      'onboarding',
      'document_collection',
      'compliance_review',
      'market_research',
      'outreach_started',
      'waiting_on_client',
      'completed',
      'retainer'
    )
  ),
  current_phase text,
  progress_percentage numeric,
  start_date date,
  due_date date,
  internal_notes text,
  client_visible_summary text,
  assigned_team_member_id uuid references team_members(id),
  created_at timestamptz not null default now()
);

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  file_name text not null,
  document_type text,
  uploaded_by text,
  upload_date timestamptz not null default now(),
  status text not null default 'pending' check (
    status in ('pending', 'approved', 'rejected', 'needs_revision')
  ),
  internal_notes text,
  client_visible_notes text
);

create table if not exists tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  description text,
  due_date date,
  status text not null default 'todo' check (
    status in ('todo', 'in_progress', 'waiting', 'completed')
  ),
  assigned_to text,
  created_at timestamptz not null default now()
);

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  sender_id uuid references auth.users,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  title text not null,
  summary text,
  created_at timestamptz not null default now(),
  file_url text
);

create table if not exists brand_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  slogan text,
  contact_email text,
  primary_color text,
  accent_color text,
  logo_url text,
  updated_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table team_members enable row level security;
alter table leads enable row level security;
alter table companies enable row level security;
alter table projects enable row level security;
alter table documents enable row level security;
alter table tasks enable row level security;
alter table messages enable row level security;
alter table reports enable row level security;
alter table brand_settings enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'admin'
  );
$$;

create or replace function public.is_team_member()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from profiles where id = auth.uid() and role = 'team_member'
  );
$$;

create or replace function public.can_access_project(project_uuid uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    public.is_admin()
    or exists (
      select 1
      from projects p
      join team_members tm on tm.id = p.assigned_team_member_id
      where p.id = project_uuid and tm.user_id = auth.uid()
    )
    or exists (
      select 1
      from projects p
      join profiles pr on pr.company_id = p.company_id
      where p.id = project_uuid and pr.id = auth.uid()
    );
$$;

create policy "profiles self read" on profiles
  for select using (id = auth.uid() or public.is_admin());

create policy "profiles self update" on profiles
  for update using (id = auth.uid() or public.is_admin());

create policy "profiles insert" on profiles
  for insert with check (id = auth.uid());

create policy "team member read" on team_members
  for select using (public.is_admin() or user_id = auth.uid());

create policy "team member update" on team_members
  for update using (public.is_admin());

create policy "lead insert" on leads
  for insert with check (true);

create policy "lead read" on leads
  for select using (
    public.is_admin()
    or exists (
      select 1 from team_members tm
      where tm.id = leads.assigned_team_member_id and tm.user_id = auth.uid()
    )
  );

create policy "lead update" on leads
  for update using (
    public.is_admin()
    or exists (
      select 1 from team_members tm
      where tm.id = leads.assigned_team_member_id and tm.user_id = auth.uid()
    )
  );

create policy "companies read" on companies
  for select using (
    public.is_admin()
    or exists (
      select 1 from profiles pr
      where pr.company_id = companies.id and pr.id = auth.uid()
    )
  );

create policy "companies update" on companies
  for update using (public.is_admin());

create policy "companies insert" on companies
  for insert with check (public.is_admin());

create policy "projects read" on projects
  for select using (public.can_access_project(id));

create policy "projects insert" on projects
  for insert with check (public.is_admin());

create policy "projects update" on projects
  for update using (
    public.is_admin()
    or exists (
      select 1 from team_members tm
      where tm.id = projects.assigned_team_member_id and tm.user_id = auth.uid()
    )
  );

create policy "documents read" on documents
  for select using (public.can_access_project(project_id));

create policy "documents insert" on documents
  for insert with check (public.can_access_project(project_id));

create policy "documents update" on documents
  for update using (public.can_access_project(project_id));

create policy "tasks read" on tasks
  for select using (public.can_access_project(project_id));

create policy "tasks insert" on tasks
  for insert with check (public.can_access_project(project_id));

create policy "tasks update" on tasks
  for update using (public.can_access_project(project_id));

create policy "messages read" on messages
  for select using (public.can_access_project(project_id));

create policy "messages insert" on messages
  for insert with check (public.can_access_project(project_id));

create policy "reports read" on reports
  for select using (public.can_access_project(project_id));

create policy "reports insert" on reports
  for insert with check (public.is_admin() or public.is_team_member());

create policy "brand settings read" on brand_settings
  for select using (public.is_admin());

create policy "brand settings update" on brand_settings
  for update using (public.is_admin());

create policy "brand settings insert" on brand_settings
  for insert with check (public.is_admin());
