"use client";

import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import truncStr from "@/utils/truncStr";
import CardCarouselItemLarge from "@/components/Carousel/CardCarouselItemLarge";
import { Game } from "@/types/Game";

const boxStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  cursor: "pointer",
  "&:hover .name, &:focus-within .name": {
    visibility: "visible",
    opacity: 1,
    transform: "translateY(0)",
  },
  "& .cover": {
    transition: "all 250ms ease-in-out",
    filter: "brightness(75%)",
  },
  "&:hover .cover, &:focus-within .cover": {
    transform: "scale(1.05)",
    filter: "brightness(100%)",
  },
};

const subtitleStyle = {
  color: "white",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  visibility: "hidden",
  opacity: 0,
  transform: "translateY(100%)",
  transition:
    "visibility 0.5s, opacity 0.5s linear, transform 0.5s ease-in-out",
  bgcolor: "rgba(30, 30, 30, 0.9)",
  boxShadow: 1,
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  px: { xs: "4px", md: "8px" },
  py: "8px",
  fontSize: {
    xs: "1rem",
    md: "1.25rem",
  },
  lineHeight: {
    xs: "1.5rem",
    md: "1.75rem",
  },
};

export default function NewReleaseGamesList({ data }: { data: Game[] }) {
  return data.map((dt) => (
    <CardCarouselItemLarge key={dt.id}>
      <Box sx={boxStyle}>
        <Link href={`/games/${dt.slug}`}>
          <Image
            style={{ objectFit: "cover", objectPosition: "center" }}
            //@ts-ignore
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.cover.image_id}.jpg`}
            alt={`${dt.name} cover`}
            loading="eager"
            fill={true}
            sizes="(max-width: 768px) 264px, 200px"
            className="cover"
          />
          <Typography
            className="name"
            sx={subtitleStyle}
            variant="subtitle1"
            component="p"
          >
            {truncStr(dt.name || "", 30)}
          </Typography>
        </Link>
      </Box>
    </CardCarouselItemLarge>
  ));
}
