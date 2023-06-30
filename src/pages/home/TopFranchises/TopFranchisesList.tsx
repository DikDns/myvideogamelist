"use client";

import Image from "next/image";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TopFranchisesItem from "./TopFranchisesItem";
import { TopFranchisesData } from "./TopFranchisesInterface";

const boxStyle = {
  position: "relative",
  width: "100%",
  height: "120px",
  cursor: "pointer",
  "&:hover h2": {
    visibility: "visible",
    opacity: 1,
    transform: "translateY(0)",
  },
  "& img": {
    transition: "all 250ms ease-in-out",
    filter: "brightness(75%)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
    filter: "brightness(100%)",
  },
};

export default function TopFranchisesList({
  data,
}: {
  data: TopFranchisesData[];
}) {
  return data.map((dt) => (
    <TopFranchisesItem key={dt.id}>
      <CardMedia
        sx={{
          height: { xs: 124, md: 152, lg: 200 },
          objectFit: "cover",
          objectPosition: "center",
        }}
        image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.games[0].cover.image_id}.jpg`}
        title={`${dt.name} cover`}
      />
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
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
        }}
      >
        {dt.name}
      </Typography>
    </TopFranchisesItem>
  ));
}
