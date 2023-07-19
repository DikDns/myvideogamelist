"use client";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { videoSlide } from "@/layouts/styles";
import { getImageUrl } from "@/lib/igdb";
import { Image } from "@/types/Image";
import { Game } from "@/types/Game";

export default function ImageSlide({
  isNotFound,
  image,
  game,
  imageType = "screenshot",
}: {
  isNotFound?: boolean;
  image?: Image;
  game?: Game;
  imageType?: "screenshot" | "artwork";
}) {
  return (
    <Box>
      <CardMedia
        component="img"
        sx={videoSlide}
        image={getImageUrl(
          isNotFound ? "" : image?.image_id || "",
          "screenshot_med",
          "2x"
        )}
        alt={game && image ? `${game.name} ${imageType}` : "Image Not Found"}
        title={game && image ? `${game.name} ${imageType}` : "Image Not Found"}
      />
    </Box>
  );
}
