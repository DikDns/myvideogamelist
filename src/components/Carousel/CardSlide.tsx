"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import truncStr from "@/utils/truncStr";
import { getImageUrl } from "@/lib/igdb";
import { Game } from "@/types/Game";
import { Franchise } from "@/types/Franchise";
import { Series } from "@/types/Series";

export interface CardSlide<TData> {
  type: "franchises" | "series" | "games";
  data: TData;
}

const cardSlideStyle = {
  height: "100%",
  width: {
    xs: 100,
    md: 128,
  },
  "&:hover .cover, &:focus-within .cover": {
    filter: "brightness(125%)",
  },
};

const cardSlideMediaStyle = {
  height: { xs: 138, md: 170 },
  filter: "brightness(100%)",
  objectFit: "cover",
  objectPosition: "center",
  transition: "all 250ms ease-in-out",
};

const cardSlideSubtitleStyle = {
  opacity: 1,
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

export default function CardSlide({
  type,
  data,
}: CardSlide<Franchise | Series | Game>) {
  return (
    <Box sx={cardSlideStyle}>
      <Link
        href={`/${type}/${data.slug}`}
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="img"
          className="cover"
          sx={cardSlideMediaStyle}
          image={getImageUrl(
            type === "games"
              ? //@ts-ignore
                data.cover?.image_id || ""
              : //@ts-ignore
                data.games[0].cover.image_id || "",
            "cover_small",
            "2x"
          )}
          title={`${data.name} Cover`}
          alt={`${data.name} Cover`}
        />
        <Typography
          className="name"
          variant="subtitle1"
          component="p"
          sx={cardSlideSubtitleStyle}
        >
          {truncStr(data.name ?? "", 20)}
        </Typography>
      </Link>
    </Box>
  );
}
