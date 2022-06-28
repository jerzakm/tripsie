DROP TABLE IF EXISTS videos;

CREATE TABLE IF NOT EXISTS videos
(
  id UUID NOT NULL DEFAULT uuid_generate_v4(),
  created_at timestamptz DEFAULT now(),
  youtubeId text NOT NULL references yt_data (id) on delete cascade,
  lnglat geometry[],
  PRIMARY KEY(id)  
);