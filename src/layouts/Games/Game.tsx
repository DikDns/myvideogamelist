"use client";

import { VideoGame } from "@/types/VideoGameType";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import AgeRatingImages from "./components/AgeRatingImages";

export default function Game({ data }: { data: VideoGame[] }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
      <AgeRatingImages ageRatings={data[0].age_ratings || []} />
    </Container>
  );
}
