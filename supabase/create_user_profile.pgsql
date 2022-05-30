-- Enable RLS
alter table public.user
  enable row level security;

-- Create Policy
create policy "Only Users can view their profiles."
  on public.user for select using (
    auth.uid() = id
  );

-- Create trigger and a function to add user profile
CREATE OR REPLACE FUNCTION auth.create_user_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
  begin
    insert into public.user(id, email)
    values(new.id, new.email);
  
    return new;
  end
$$;

DROP TRIGGER IF EXISTS create_user_profile on auth.users;

create trigger create_user_profile
  after insert on auth.users
  for each row execute procedure auth.create_user_profile();