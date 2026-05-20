# Entrix Consulting Platform

A full-stack platform for a U.S. market entry consulting team. It includes a
public website, client portal, and internal CRM dashboard with Supabase Auth
and a shared design system.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase (Auth, Database, Storage)

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and add your Supabase keys:

```bash
cp .env.example .env.local
```

3. Configure Supabase:

- Run the SQL in [supabase/schema.sql](supabase/schema.sql).
- Optional: seed data in [supabase/seed.sql](supabase/seed.sql).

4. Run the dev server:

```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Lint project

## Project Notes

- Branding is centralized in [src/lib/branding.ts](src/lib/branding.ts).
- Supabase client lives in [src/lib/supabase](src/lib/supabase).
- Contact form submissions write to the `leads` table via `/api/leads`.

## Next Steps

- Connect real Supabase auth roles to the portal and CRM pages.
- Integrate Stripe, proposal generation, and contract workflows.
- Add automated notifications and AI document review.
