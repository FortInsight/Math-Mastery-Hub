create table if not exists public.mastery_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  account_type text not null default 'learner' check (account_type in ('learner', 'parent')),
  parent_id uuid references public.mastery_profiles(id) on delete set null,
  grade integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.mastery_profiles add column if not exists parent_id uuid references public.mastery_profiles(id) on delete set null;

create table if not exists public.mastery_children (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.mastery_profiles(id) on delete cascade,
  child_name text not null,
  child_email text,
  linked_profile_id uuid references public.mastery_profiles(id) on delete set null,
  avatar_data_url text,
  grade integer not null,
  created_at timestamptz not null default now()
);

alter table public.mastery_children add column if not exists child_email text;
alter table public.mastery_children add column if not exists linked_profile_id uuid references public.mastery_profiles(id) on delete set null;
alter table public.mastery_children add column if not exists avatar_data_url text;
alter table public.mastery_children drop column if exists child_username;
alter table public.mastery_children drop column if exists password_hash;

create unique index if not exists mastery_children_child_email_unique
on public.mastery_children (parent_id, lower(child_email))
where child_email is not null;

create table if not exists public.mastery_progress (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.mastery_profiles(id) on delete cascade,
  child_id uuid references public.mastery_children(id) on delete cascade,
  grade integer not null,
  category_id text not null,
  category_title text not null,
  level integer not null,
  score integer not null default 0,
  percentage integer not null default 0,
  results jsonb not null default '[]'::jsonb,
  study_time_seconds integer not null default 0,
  completed_at timestamptz not null default now()
);

alter table public.mastery_profiles enable row level security;
alter table public.mastery_children enable row level security;
alter table public.mastery_progress enable row level security;

drop policy if exists "Users manage own mastery profile" on public.mastery_profiles;
create policy "Users manage own mastery profile"
on public.mastery_profiles
for all
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Parents read linked learner profiles" on public.mastery_profiles;
create policy "Parents read linked learner profiles"
on public.mastery_profiles
for select
using (
  exists (
    select 1
    from public.mastery_children
    where mastery_children.parent_id = auth.uid()
      and mastery_children.linked_profile_id = mastery_profiles.id
  )
);

drop policy if exists "Parents manage own children" on public.mastery_children;
create policy "Parents manage own children"
on public.mastery_children
for all
using (auth.uid() = parent_id)
with check (auth.uid() = parent_id);

drop policy if exists "Learners claim linked child record" on public.mastery_children;
create policy "Learners claim linked child record"
on public.mastery_children
for update
using (lower(child_email) = lower(auth.jwt()->>'email'))
with check (
  lower(child_email) = lower(auth.jwt()->>'email')
  and linked_profile_id = auth.uid()
);

drop policy if exists "Users manage own progress" on public.mastery_progress;
create policy "Users manage own progress"
on public.mastery_progress
for all
using (auth.uid() = owner_id)
with check (auth.uid() = owner_id);

drop policy if exists "Parents read linked learner progress" on public.mastery_progress;
create policy "Parents read linked learner progress"
on public.mastery_progress
for select
using (
  exists (
    select 1
    from public.mastery_children
    where mastery_children.parent_id = auth.uid()
      and mastery_children.linked_profile_id = mastery_progress.owner_id
  )
);

drop policy if exists "Parents manage linked learner progress" on public.mastery_progress;
create policy "Parents manage linked learner progress"
on public.mastery_progress
for all
using (
  exists (
    select 1
    from public.mastery_children
    where mastery_children.parent_id = auth.uid()
      and mastery_children.linked_profile_id = mastery_progress.owner_id
  )
)
with check (
  exists (
    select 1
    from public.mastery_children
    where mastery_children.parent_id = auth.uid()
      and mastery_children.linked_profile_id = mastery_progress.owner_id
  )
);
