"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import YoutubePlayer from "@/components/VideoPlayer/YoutubePlayer";
import { Video } from "@/types/Video";
import { videoSlide } from "@/layouts/styles";

export default function VideoSlide({ video }: { video: Video }) {
  return (
    <Box key={video.id} sx={videoSlide}>
      <CardMedia>
        <YoutubePlayer
          videoId={video.video_id}
          width="100%"
          height="144px"
          fallback={
            <Skeleton variant="rectangular" width="100%" height="100%" />
          }
        />
      </CardMedia>
    </Box>
  );
}
