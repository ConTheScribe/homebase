-- Homebase: one table of JSON documents per user, mirroring the app's structure:
--   id = 'profile'      habits, people, books, goals, investing, weekly runs
--   id = 'w-2026-45'    every entry logged in that ISO week
create table if not exists public.docs (
  user_id    uuid        not null references auth.users(id) on delete cascade,
  id         text        not null,
  data       jsonb       not null,
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

alter table public.docs enable row level security;

-- Each signed-in person can only see and change their own rows.
create policy "read own docs"   on public.docs for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own docs" on public.docs for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own docs" on public.docs for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "delete own docs" on public.docs for delete to authenticated using ((select auth.uid()) = user_id);
