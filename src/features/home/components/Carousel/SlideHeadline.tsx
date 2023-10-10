"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import MUIBox from "@mui/material/Box";
import MUITypography from "@mui/material/Typography";
import truncStr from "@/utils/truncStr";
import Game from "@/features/games/types/Game";
import { getImageUrl } from "@/lib/igdb";

const slideHeadlineStyle = {
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  width: {
    xs: "176px",
    md: "20vw",
  },
  height: { xs: "248px", md: "374px" },
  "& .cover": {
    transition: "all 250ms ease-in-out",
    filter: "brightness(100%)",
  },
  "&:hover .cover, &:focus-within .cover": {
    transform: "scale(1.025)",
    filter: "brightness(125%)",
  },
};

const headlineSubtitleStyle = {
  color: "white",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background:
    "linear-gradient(to bottom, #12121200 0%, #121212b2 50%, #121212 100%)",
  backdropFilter: "blur(3px)",
  boxShadow: 1,
  p: { xs: "8px", md: "16px" },
  fontSize: {
    xs: "1rem",
    md: "1.25rem",
  },
  lineHeight: {
    xs: "1.5rem",
    md: "1.75rem",
  },
};

export default function SlideHeadline({ game }: { game: Game }) {
  return (
    <MUIBox sx={slideHeadlineStyle}>
      <NextLink href={`/games/${game.slug}`}>
        <NextImage
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={getImageUrl(game?.cover?.image_id || "", "cover_big", "2x")}
          alt={`${game.name} cover`}
          loading="eager"
          fill={true}
          sizes="(max-width: 600px) 176px, 374px"
          className="cover"
        />
        <MUITypography
          className="name"
          sx={headlineSubtitleStyle}
          variant="subtitle1"
          component="p"
        >
          {truncStr(game.name || "", 30)}
        </MUITypography>
      </NextLink>
    </MUIBox>
  );
}
