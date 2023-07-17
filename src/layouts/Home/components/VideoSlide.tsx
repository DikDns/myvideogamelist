"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import YoutubePlayer from "@/components/VideoPlayer/YoutubePlayer";
import { Video } from "@/types/Video";
import truncStr from "@/utils/truncStr";
import { videoSlide, subtitleSlide } from "@/layouts/styles";

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
      <Typography
        className="name"
        sx={subtitleSlide}
        variant="subtitle1"
        component="p"
      >
        {truncStr(
          `${video.name || ""} for ${video.game ? video.game.name || "" : ""}`,
          50
        )}
      </Typography>
    </Box>
  );
}
