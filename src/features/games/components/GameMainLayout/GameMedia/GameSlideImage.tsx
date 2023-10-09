"use client";

import MUIBox from "@mui/material/Box";
import MUICardMedia from "@mui/material/CardMedia";
import { SxProps } from "@mui/material/styles";
import { getImageUrl } from "@/lib/igdb";
import Image from "../../../types/Image";
import Game from "../../../types/Game";

const cardMedia: SxProps = {
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

export default function GameSlideImage({
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
    <MUIBox>
      <MUICardMedia
        component="img"
        sx={cardMedia}
        image={getImageUrl(
          isNotFound || !image?.image_id ? "" : image.image_id,
          "screenshot_med",
          "2x"
        )}
        alt={game && image ? `${game.name} ${imageType}` : "Image Not Found"}
        title={game && image ? `${game.name} ${imageType}` : "Image Not Found"}
      />
    </MUIBox>
  );
}
