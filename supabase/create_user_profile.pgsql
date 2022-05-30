CREATE OR REPLACE FUNCTION auth.create_user_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
  begin
    insert into public."User"(id, email)
    values(new.id, new.email);
  
    return new;
  end
$$;

DROP TRIGGER IF EXISTS create_user_profile on auth.users;

create trigger create_user_profile
  after insert on auth.users
  for each row execute procedure auth.create_user_profile();