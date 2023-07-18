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
  return isNotFound ? (
    <Box>
      <CardMedia
        component="img"
        sx={videoSlide}
        image={getImageUrl("", "screenshot_med")}
        alt={`Screenshot Not Found`}
        title={`Screenshot Not Found`}
        height={144}
      />
    </Box>
  ) : image && game ? (
    <Box>
      <CardMedia
        component="img"
        sx={videoSlide}
        image={getImageUrl(image.image_id || "", "screenshot_med")}
        alt={`${game.name} ${imageType}`}
        title={`${game.name} ${imageType}`}
      />
    </Box>
  ) : (
    ""
  );
}
