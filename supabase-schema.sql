-- =====================================================================
-- REQUIRED ONE-TIME SUPABASE DASHBOARD SETTING for username-login kids:
-- Go to Authentication -> Providers -> Email in your Supabase project
-- and turn OFF "Confirm email". Child accounts are created with a made-up
-- internal email address (nobody reads it), so a confirmation link can
-- never be delivered. With "Confirm email" off, the account is usable
-- immediately after the parent creates it. This does not weaken security
-- for parent/adult accounts that use their real email — it's a global
-- Supabase Auth setting, so real parent signups simply won't need to
-- click a confirmation link either (they still set their own password).
-- =====================================================================

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

-- child_username: the login name a parent sets for a child. The child signs in with this
-- username on the Learner Login page; the app translates it into a hidden internal email
-- (see app.js deriveChildEmailFromUsername) so it can still use normal Supabase email/password
-- auth under the hood. Usernames must be globally unique because they map 1:1 to that hidden email.
alter table public.mastery_children add column if not exists child_username text;

create unique index if not exists mastery_children_child_email_unique
on public.mastery_children (parent_id, lower(child_email))
where child_email is not null;

create unique index if not exists mastery_children_child_username_unique
on public.mastery_children (lower(child_username))
where child_username is not null;

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

create or replace function public.sync_mastery_profile_from_auth()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.mastery_profiles (
    id,
    email,
    display_name,
    account_type,
    grade,
    updated_at
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'user_name', split_part(coalesce(new.email, 'Learner'), '@', 1), 'Learner'),
    case
      when coalesce(new.raw_user_meta_data ->> 'account_type', 'parent') = 'learner' then 'learner'
      else 'parent'
    end,
    case
      when (new.raw_user_meta_data ->> 'account_type') = 'learner'
        then nullif(new.raw_user_meta_data ->> 'grade', '')::integer
      else null
    end,
    now()
  )
  on conflict (id) do update
  set
    email = excluded.email,
    display_name = coalesce(excluded.display_name, public.mastery_profiles.display_name),
    account_type = excluded.account_type,
    grade = excluded.grade,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_mastery_profile on auth.users;
create trigger on_auth_user_created_mastery_profile
after insert on auth.users
for each row
execute function public.sync_mastery_profile_from_auth();

insert into public.mastery_profiles (
  id,
  email,
  display_name,
  account_type,
  grade,
  updated_at
)
select
  users.id,
  users.email,
  coalesce(users.raw_user_meta_data ->> 'user_name', split_part(coalesce(users.email, 'Learner'), '@', 1), 'Learner'),
  case
    when coalesce(users.raw_user_meta_data ->> 'account_type', 'parent') = 'learner' then 'learner'
    else 'parent'
  end,
  case
    when (users.raw_user_meta_data ->> 'account_type') = 'learner'
      then nullif(users.raw_user_meta_data ->> 'grade', '')::integer
    else null
  end,
  now()
from auth.users as users
on conflict (id) do update
set
  email = excluded.email,
  display_name = coalesce(excluded.display_name, public.mastery_profiles.display_name),
  account_type = excluded.account_type,
  grade = coalesce(excluded.grade, public.mastery_profiles.grade),
  updated_at = now();

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
