"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import NextLink from "next/link";
import MUIBox from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import MUICard from "@mui/material/Card";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import MUISkeleton from "@mui/material/Skeleton";
import { SxProps } from "@mui/material/styles";
import YoutubePlayer from "@/services/YoutubePlayer";
import CircularLoading from "@/layouts/CircularLoading";
import useVideos from "@/features/videos/hooks/useVideos";

export const videoSlide: SxProps = {
  width: "256px",
  minHeight: "144px",
  overflow: "hidden",
  boxShadow: 2,
  borderRadius: "5px",
  "&:hover p": {
    opacity: 1,
  },
  ".react-player__preview": {
    transition: "filter 250ms ease-in-out",
  },
  ".react-player__preview:hover, .react-player__preview:focus": {
    filter: "brightness(125%)",
  },
};

export const subtitleSlide: SxProps = {
  opacity: 0.75,
  fontSize: {
    xs: "0.75rem",
    md: "1rem",
  },
  lineHeight: {
    xs: "1rem",
    md: "1.25rem",
  },
  px: { xs: "8px", md: "16px" },
  py: "8px",
  transition: "all 250ms ease-in-out",
};

export default function VideosInfiniteLoad() {
  const { videos, hasMore, fetchMore } = useVideos();

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={<CircularLoading />}
    >
      <MUIBox
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
          <MUICard key={video.id} sx={videoSlide} variant="outlined">
            <MUICardMedia>
              <YoutubePlayer
                videoId={video.video_id}
                width="100%"
                height="144px"
                fallback={
                  <MUISkeleton
                    variant="rectangular"
                    width="100%"
                    height="100%"
                  />
                }
              />
            </MUICardMedia>
            <MUITypography
              className="name"
              sx={subtitleSlide}
              variant="subtitle1"
              component="p"
            >
              {`${video.name ?? ""} for `}
              <MUILink
                color="#fff"
                href={`/games/${video.game?.slug}`}
                component={NextLink}
              >
                {`${video.game ? video.game.name ?? "" : ""}`}
              </MUILink>
            </MUITypography>
          </MUICard>
        ))}
      </MUIBox>
    </InfiniteScroll>
  );
}
