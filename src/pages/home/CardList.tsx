"use client";

import Image from "next/image";
import { NewReleaseData } from "./NewReleases";
import CardItem from "./CardItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CardList({ data }: { data: NewReleaseData[] }) {
  return data.map((dt) => (
    <CardItem key={dt.id}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
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
        <Typography
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            visibility: "hidden",
            opacity: 0,
            transform: "translateY(100%)",
            transition:
              "visibility 0.5s, opacity 0.5s linear, transform 0.5s ease-in-out",

            bgcolor: "rgba(30, 30, 30, 0.75)",
            boxShadow: 1,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            px: "4px",
          }}
          variant="subtitle1"
          component="h2"
        >
          {dt.name}
        </Typography>
      </Box>
    </CardItem>
  ));
}
