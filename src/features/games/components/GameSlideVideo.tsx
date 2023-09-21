"use client";

import MUIBox from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import MUISkeleton from "@mui/material/Skeleton";
import { SxProps } from "@mui/material/styles";
import YoutubePlayer from "@/services/YoutubePlayer";
import Video from "../types/Video";

export const boxVideo: SxProps = {
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

export default function GameSlideVideo({ video }: { video: Video }) {
  return (
    <MUIBox key={video.id} sx={boxVideo}>
      <MUICardMedia>
        <YoutubePlayer
          videoId={video.video_id}
          width="100%"
          height="144px"
          fallback={
            <MUISkeleton variant="rectangular" width="100%" height="100%" />
          }
        />
      </MUICardMedia>
    </MUIBox>
  );
}
