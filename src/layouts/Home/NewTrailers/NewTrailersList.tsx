"use client";

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import YoutubePlayer from "@/components/VideoPlayer/YoutubePlayer";
import { NewTrailersData } from "./NewTrailers";

const newTrailerItemStyle = {
  mx: "8px",
  flex: "0 0 auto",
  minWidth: "0",
  maxWidth: "100%",
  overflow: "hidden",
  boxShadow: 2,
  borderRadius: "5px",
};

export default function NewTrailersList({ data }: { data: NewTrailersData[] }) {
  return data.map((dt) => (
    <Box sx={newTrailerItemStyle} key={dt.id}>
      <YoutubePlayer
        videoId={dt.video_id}
        width="100%"
        height="95%"
        fallback={<Skeleton variant="rectangular" width="95%" height="100%" />}
      />
    </Box>
  ));
}
