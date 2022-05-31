-- Enable RLS
-- alter table public.video_tags
--   enable row level security;


-- DROP POLICY  IF EXISTS  "All users can read tags" ON public.video_tags;
-- create policy "All users can read tags"
--   on public.video_tags for update using (
--     auth.role() = 'authenticated' || 'anon'
--   );



-- ADD an enum type for tags and a video tag column to submissions
-- DO
-- $$
-- BEGIN
-- EXECUTE (    
--     SELECT format('CREATE TYPE VIDEO_TAG AS ENUM (%s)'
--                   ,string_agg(DISTINCT quote_literal(id), ', '))
--     FROM  public.video_tags);
-- END 
-- $$

-- ALTER TABLE public.video_submissions ADD COLUMN tags VIDEO_TAG[];

-- select array(select id from public.video_tags);
