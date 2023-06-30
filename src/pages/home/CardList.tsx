"use client";

import Image from "next/image";
import { NewReleaseData } from "./NewReleases";
import CardItem from "./CardItem";
import Box from "@mui/material/Box";

export default function CardList({ data }: { data: NewReleaseData[] }) {
  return data.map((dt) => (
    <CardItem key={dt.id}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          cursor: "pointer",
          "& img": {
            transition: "all 250ms ease-in-out",
            filter: "brightness(75%)",
          },
          "&:hover img": {
            transform: "scale(1.05)",
            filter: "brightness(100%)",
          },
        }}
      >
        <Image
          style={{ objectFit: "cover", objectPosition: "center" }}
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.cover.image_id}.jpg`}
          alt={`${dt.name} cover`}
          loading="eager"
          fill={true}
          sizes="(max-width: 768px) 264px, 200px"
        />
      </Box>
    </CardItem>
  ));
}
