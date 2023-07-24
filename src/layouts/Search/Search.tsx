"use client";

import { Game } from "@/types/Game";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GameCard from "./components/GameCard";

export default function Search({ games }: { games: Game[] }) {
  useEffect(() => {
    console.log(games);
  }, []);

  return (
    <Container component="main" sx={{ mt: 10 }}>
      {games.length > 0 ? (
        <Grid container gap={3}>
          {games.map((game) => (
            <Grid item key={game.id} xs={12}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" component="h2" textAlign="center">
          Not Found
        </Typography>
      )}
    </Container>
  );
}
