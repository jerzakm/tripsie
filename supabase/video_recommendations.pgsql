-- with postgis enabled, add video lnglat points
ALTER TABLE video_submissions
ADD COLUMN lnglat geometry[];

-- example insert
-- INSERT INTO video_submissions (url, "user", lnglat)
-- VALUES ('youtube video url', 'user_uuid', ARRAY[ST_GeomFromText('POINT(-71.060316 48.432044)', 4326)]);