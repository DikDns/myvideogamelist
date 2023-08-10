"use client";

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import CircularLoading from "@/components/Loading/CircularLoading";
import Box from "@mui/material/Box";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { getGameVideos } from "@/lib/igdb";
import { Video } from "@/types/Video";

export default function Videos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const body = `
      f name, video_id, game.name, game.slug;
      w name != n & game != n & video_is != n;
      s id desc;
      l ${fetchLimit};
      o ${offset};
    `;
    const nextVideos: Video[] = await getGameVideos(body);

    if (nextVideos.length <= 0) return setHasMore(false);

    setVideos((prevVideos) => [...prevVideos, ...nextVideos]);
    setOffset(videos.length + nextVideos.length);
  };

  return (
    <Container>
      <BasicBreadcrumbs />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
      >
        <Box>
          {videos.map((video, index) => (
            <Box>{`${video.name} | ${video.game?.name}`}</Box>
          ))}
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
