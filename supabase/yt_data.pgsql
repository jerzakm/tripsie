DROP POLICY  IF EXISTS  "Authenticated users can read youtube video data" ON public.video_tags;
create policy "Authenticated users can read youtube video data"
  on public.video_tags for update using (
    auth.role() = 'authenticated' 
  );