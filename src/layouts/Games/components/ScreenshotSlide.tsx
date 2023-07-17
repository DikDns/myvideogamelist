"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { videoSlide } from "@/layouts/styles";

import { getImageUrl } from "@/lib/igdb";
import { Screenshot } from "@/types/Screenshot";

export default function ScreenshotSlide({
  screenshot,
}: {
  screenshot: Screenshot;
}) {
  return (
    <Box key={screenshot.id}>
      <CardMedia
        component="img"
        sx={videoSlide}
        image={getImageUrl(screenshot.image_id || "", "screenshot_med")}
        alt={`${screenshot.game ? screenshot.game.name : "unidentified"} cover`}
        title={`${
          screenshot.game ? screenshot.game.name : "unidentified"
        } cover`}
      />
    </Box>
  );
}
