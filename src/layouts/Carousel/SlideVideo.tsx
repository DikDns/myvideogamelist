"use client";

import MUIBox from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import MUITypography from "@mui/material/Typography";
import MUISkeleton from "@mui/material/Skeleton";
import { SxProps } from "@mui/material/styles";
import YoutubePlayer from "@/services/YoutubePlayer";
import truncStr from "@/utils/truncStr";
import Video from "@/features/videos/types/Video";

const videoSlide: SxProps = {
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

const subtitleSlide: SxProps = {
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

export default function SlideVideo({ video }: { video: Video }) {
  return (
    <MUIBox key={video.id} sx={videoSlide}>
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
      <MUITypography
        className="name"
        sx={subtitleSlide}
        variant="subtitle1"
        component="p"
      >
        {truncStr(
          `${video.name || ""} from ${video.game ? video.game.name || "" : ""}`,
          50
        )}
      </MUITypography>
    </MUIBox>
  );
}
