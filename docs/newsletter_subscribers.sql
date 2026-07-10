-- Second Season newsletter subscribers
-- Run in Supabase SQL editor before using POST /api/newsletter/subscribe

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  status text not null default 'active',
  source text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

create or replace function newsletter_subscribers_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists newsletter_subscribers_updated_at on newsletter_subscribers;

create trigger newsletter_subscribers_updated_at
before update on newsletter_subscribers
for each row
execute function newsletter_subscribers_set_updated_at();
