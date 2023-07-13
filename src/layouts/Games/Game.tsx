"use client";

import { useEffect, useState } from "react";
import { Game } from "@/types/Game";
import Container from "@mui/material/Container";
import AgeRatingImages from "./components/AgeRatingImages";
import GameHeading from "./components/GameHeading";
import GameSummary from "./components/GameSummary";

export default function Game({ game }: { game: Game }) {
  useEffect(() => {
    console.log(game);
  }, []);

  return (
    <>
      {/* Heading: Game Cover and Name */}
      <GameHeading game={game} />

      {/* Game Information: Genres, Platforms, Summary */}
      <Container component="main" sx={{ overflow: "hidden" }}>
        {/* Summary */}
        <GameSummary game={game} />

        <AgeRatingImages ageRatings={game.age_ratings || []} />
      </Container>
    </>
  );
}
