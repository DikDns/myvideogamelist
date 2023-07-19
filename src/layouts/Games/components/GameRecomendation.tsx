"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import CardSlide from "@/components/Carousel/CardSlide";
import { h3 } from "@/layouts/styles";
import { Game } from "@/types/Game";

export default function GameRecomendation({ game }: { game: Game }) {
  return game.similar_games ? (
    <Stack gap={1} my={5}>
      <Typography mb={1} variant="h3" sx={h3}>{`Recommendations`}</Typography>
      <CardCarousel
        slides={game.similar_games.map((similarGame) => (
          <CardSlide key={similarGame.id} type="games" data={similarGame} />
        ))}
      />
    </Stack>
  ) : (
    ""
  );
}
