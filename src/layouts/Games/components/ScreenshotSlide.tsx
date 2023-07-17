"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { Screenshot } from "@/types/Screenshot";
import { getImageUrl } from "@/lib/igdb";

export default function ScreenshotSlide({
  screenshot,
}: {
  screenshot: Screenshot;
}) {
  return (
    <Box key={screenshot.id}>
      <CardMedia
        component="img"
        sx={{ width: 569, height: 320 }}
        image={getImageUrl(screenshot.image_id || "", "screenshot_med")}
        alt={`${screenshot.game ? screenshot.game.name : "unidentified"} cover`}
        title={`${
          screenshot.game ? screenshot.game.name : "unidentified"
        } cover`}
      />
    </Box>
  );
}
