"use client";

import { useEffect } from "react";
import { Game } from "@/types/Game";
import Container from "@mui/material/Container";
import AgeRatingImages from "./components/AgeRatingImages";
import GameHeading from "./components/GameHeading";

export default function Game({ game }: { game: Game }) {
  useEffect(() => {
    console.log(game);
  }, []);

  return (
    <>
      {/* Heading: Game Cover and Name */}
      <GameHeading game={game} />

      <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
        <AgeRatingImages ageRatings={game.age_ratings || []} />
      </Container>
    </>
  );
}
