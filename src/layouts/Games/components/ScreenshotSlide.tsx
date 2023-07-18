"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { videoSlide } from "@/layouts/styles";
import { getImageUrl } from "@/lib/igdb";
import { Image } from "@/types/Image";
import { Game } from "@/types/Game";

export default function ScreenshotSlide({
  screenshot,
  game,
}: {
  screenshot: Image;
  game: Game;
}) {
  return (
    <Box key={screenshot.id}>
      <CardMedia
        component="img"
        sx={videoSlide}
        image={getImageUrl(screenshot.image_id || "", "screenshot_med")}
        alt={`${game.name} Screenshot`}
        title={`${game.name} Screenshot`}
      />
    </Box>
  );
}
