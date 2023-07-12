"use client";

import { useEffect } from "react";
import { VideoGame } from "@/types/VideoGameType";
import Container from "@mui/material/Container";
import Image from "next/image";
import AgeRatingImages from "./components/AgeRatingImages";
import { getImageUrl } from "@/lib/igdb";

export default function Game({ data }: { data: VideoGame }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
      <Image
        src={getImageUrl(data.cover?.image_id || "", "cover_small")}
        alt={`${data.name} Cover`}
        width={90}
        height={128}
      />
      <AgeRatingImages ageRatings={data.age_ratings || []} />
    </Container>
  );
}
