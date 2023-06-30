"use client";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import truncStr from "@/utils/truncStr";
import TopItem from "./TopItem";
import { TopData } from "./TopInterface";

const cardMediaStyle = {
  height: { xs: 124, md: 152, lg: 200 },
  objectFit: "cover",
  objectPosition: "center",
};

const subtitleStyle = {
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
};

export default function TopFranchisesList({ data }: { data: TopData[] }) {
  return data.map((dt) => (
    <TopItem key={dt.id}>
      <CardMedia
        sx={cardMediaStyle}
        image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.games[0].cover.image_id}.jpg`}
        title={`${dt.name} cover`}
      />
      <Typography variant="subtitle1" component="p" sx={subtitleStyle}>
        {truncStr(dt.name, 15)}
      </Typography>
    </TopItem>
  ));
}
