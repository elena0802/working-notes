-- Second Season newsletter send campaigns
-- Run in Supabase SQL editor before using POST /api/newsletter/send (mode: all)

create table if not exists newsletter_campaigns (
  id uuid primary key default gen_random_uuid(),
  newsletter_slug text not null unique,
  recipient_count int not null,
  sent_at timestamptz not null default now(),
  resend_campaign_id text,
  created_at timestamptz not null default now()
);
