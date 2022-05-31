-- with postgis enabled, add video lnglat points
-- ALTER TABLE video_submissions
-- ADD COLUMN lnglat geometry[];

-- example insert
-- INSERT INTO video_submissions (url, "user", lnglat)
-- VALUES ('youtube video url', 'user_uuid', ARRAY[ST_GeomFromText('POINT(-71.060316 48.432044)', 4326)]);

-- Enable RLS
alter table public.video_submissions
  enable row level security;

-- Create Policy
DROP POLICY  IF EXISTS  "Only Users can view videos they submitted." ON public.video_submissions;
create policy "Only Users can view videos they submitted."
  on public.video_submissions for select using (
    auth.uid() = video_submissions.user
  );

DROP POLICY  IF EXISTS  "Only authenticated users can submit videos." ON public.video_submissions;
create policy "Only authenticated users can submit videos."
  on public.video_submissions for insert TO authenticated 
WITH CHECK (true);