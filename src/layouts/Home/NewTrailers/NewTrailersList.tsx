"use client";

import Box from "@mui/material/Box";
import YoutubeIframe from "@/components/YoutubeIframe/YoutubeIframe";
import { NewTrailersData } from "./NewTrailersInterface";

const newTrailerItemStyle = {
  mx: "8px",
  flex: "0 0 auto",
  minWidth: "0",
  maxWidth: "100%",
  width: "400px",
  height: "225px",
};

export default function NewTrailersList({ data }: { data: NewTrailersData[] }) {
  return data.map((dt) => (
    <Box sx={newTrailerItemStyle}>
      <YoutubeIframe
        videoId={dt.video_id}
        title={`${dt.game.name} ${dt.name}`}
        key={dt.id}
        styles={{ width: "100%", height: "100%" }}
      />
    </Box>
  ));
}
