import { useState, useEffect } from "react";
import getGameVideos from "@/services/api-videos/lib/getGameVideos";
import Video from "@/services/api-videos/types/Video";

export default function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (videos.length > 0) return;
    fetchMore();
  }, []);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const body = `
      f name, video_id, game.name, game.slug;
      w name != n & game != n & video_id != n;
      s id desc;
      l ${fetchLimit};
      o ${offset};
    `;
    const nextVideos: Video[] = await getGameVideos(body);

    if (nextVideos.length <= 0) return setHasMore(false);

    setVideos((prevVideos) => [...prevVideos, ...nextVideos]);
    setOffset(videos.length + nextVideos.length);
    setHasMore(true);
  };

  return { videos, offset, hasMore, fetchMore };
}
