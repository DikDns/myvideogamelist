"use client";

import { useEffect } from "react";
import { Game } from "@/types/Game";
import Container from "@mui/material/Container";
import AgeRatingImages from "./components/AgeRatingImages";
import GameHeading from "./components/GameHeading";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const grid = {
  display: "grid",
  gridTemplateColumns: "85px auto",
  justifyContent: "start",
  gap: 1,
};

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
        <Stack gap={1} mb={5} mt={2}>
          <Box sx={grid}>
            <Typography variant="body1">
              <strong>{`Genre:`}</strong>
            </Typography>

            <Typography variant="body1">
              {game.genres?.map((genre) => genre.name).join(", ")}
            </Typography>
          </Box>
          <Box sx={grid}>
            <Typography variant="body1">
              <strong>{`Platforms:`}</strong>
            </Typography>

            <Typography variant="body1">
              {game.platforms
                ?.map((platform) => platform.abbreviation)
                .join(", ")}
            </Typography>
          </Box>
        </Stack>

        <AgeRatingImages ageRatings={game.age_ratings || []} />
      </Container>
    </>
  );
}
