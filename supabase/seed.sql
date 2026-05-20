insert into brand_settings (company_name, slogan, contact_email, primary_color, accent_color, logo_url)
values (
  'Anatolia Bridge Consulting',
  'Helping Turkish companies expand into the U.S. with confidence.',
  'contact@anatoliabridge.com',
  '#0f4c5c',
  '#c88a2a',
  null
);

insert into companies (name, industry, country, website, contact_person, contact_email, phone, status)
values (
  'Marmara Naturals',
  'Supplements',
  'Turkey',
  'https://marmaranaturals.com',
  'Ece Kaya',
  'ece@marmaranaturals.com',
  '+90 216 555 2288',
  'active'
);

insert into projects (company_id, service_type, status, current_phase, progress_percentage, start_date, due_date)
select id, 'FDA & Compliance Preparation', 'compliance_review', 'Documentation Preparation', 62, '2026-04-05', '2026-06-15'
from companies
where name = 'Marmara Naturals';

insert into documents (project_id, file_name, document_type, uploaded_by, status, internal_notes, client_visible_notes)
select id, 'Label artwork v3', 'Packaging', 'Client', 'needs_revision', 'FDA statement missing.', 'Update net weight in ounces.'
from projects
where service_type = 'FDA & Compliance Preparation';

insert into tasks (project_id, title, description, due_date, status, assigned_to)
select id, 'Share ingredient list', 'Provide ingredient list with percentages for FDA review.', '2026-05-20', 'in_progress', 'Client'
from projects
where service_type = 'FDA & Compliance Preparation';

insert into reports (project_id, title, summary)
select id, 'Week 4 Market Entry Report', 'Compliance checklist is 70% complete; outreach prep underway.'
from projects
where service_type = 'FDA & Compliance Preparation';

insert into leads (full_name, company_name, email, phone, country, industry, website, product_type, desired_service, current_stage, message, status)
values (
  'Selin Aydin',
  'Ephesus Botanics',
  'selin@ephesusbotanics.com',
  '+90 212 555 8899',
  'Turkey',
  'Cosmetics & Personal Care',
  'https://ephesusbotanics.com',
  'Natural skincare',
  'FDA & Compliance Preparation',
  'Preparing compliance documents',
  'Looking for labeling and importer support for our first U.S. shipment.',
  'contacted'
);
