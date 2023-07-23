"use client";

import { Game } from "@/types/Game";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GameCard from "./components/GameCard";

export default function Search({ games }: { games: Game[] }) {
  console.log(games);

  return (
    <Container component="main" sx={{ mt: 10 }}>
      <Grid container gap={4}>
        {games.map((game) => (
          <Grid item key={game.id} xs={12}>
            <GameCard game={game} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
