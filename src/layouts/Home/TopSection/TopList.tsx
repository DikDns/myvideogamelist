"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import truncStr from "@/utils/truncStr";
import TopItem from "./TopItem";
import { List, TopData } from "./TopSectionType";

const boxStyle = {
  "&:hover .cover, &:focus-within .cover": {
    filter: "brightness(100%)",
  },
  "&:hover .name, &:focus-within .name": {
    opacity: 1,
  },
};

const cardMediaStyle = {
  height: { xs: 124, md: 152, lg: 200 },
  filter: "brightness(75%)",
  objectFit: "cover",
  objectPosition: "center",
  transition: "all 250ms ease-in-out",
};

const subtitleStyle = {
  opacity: 0.75,
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

export default function TopList({
  data,
  type,
}: {
  data: TopData[];
  type: List;
}) {
  return data.map((dt) => (
    <TopItem key={dt.id}>
      <Box sx={boxStyle}>
        <Link
          href={`/${type}/${dt.slug}`}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <CardMedia
            className="cover"
            sx={cardMediaStyle}
            image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.games[0].cover.image_id}.jpg`}
            title={`${dt.name} cover`}
          />
          <Typography
            className="name"
            variant="subtitle1"
            component="p"
            sx={subtitleStyle}
          >
            {truncStr(dt.name, 20)}
          </Typography>
        </Link>
      </Box>
    </TopItem>
  ));
}
