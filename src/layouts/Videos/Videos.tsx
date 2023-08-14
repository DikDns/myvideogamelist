"use client";

import NextLink from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import CircularLoading from "@/components/Loading/CircularLoading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Skeleton from "@mui/material/Skeleton";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import YoutubePlayer from "@/components/VideoPlayer/YoutubePlayer";
import { getGameVideos } from "@/lib/igdb";
import { h3, subtitleSlide, videoSlide } from "../styles";
import { Video } from "@/types/Video";

export default function Videos() {
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

  return (
    <Container>
      <Box mt={1} mb={2}>
        <BasicBreadcrumbs />
      </Box>

      <Typography mb={4} variant="h3" sx={h3}>
        Videos
      </Typography>

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
      >
        <Box
          sx={{
            display: "grid",
            rowGap: { xs: 4, md: 8 },
            columnGap: 2,
            justifyItems: "center",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
            },
          }}
        >
          {videos.map((video) => (
            <Card key={video.id} sx={videoSlide} variant="outlined">
              <CardMedia>
                <YoutubePlayer
                  videoId={video.video_id}
                  width="100%"
                  height="144px"
                  fallback={
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height="100%"
                    />
                  }
                />
              </CardMedia>
              <Typography
                className="name"
                sx={subtitleSlide}
                variant="subtitle1"
                component="p"
              >
                {`${video.name || ""} for `}
                <Link
                  color="#fff"
                  href={`/games/${video.game?.slug}`}
                  component={NextLink}
                >
                  {`${video.game ? video.game.name || "" : ""}`}
                </Link>
              </Typography>
            </Card>
          ))}
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
