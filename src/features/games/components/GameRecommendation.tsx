"use client";

import { useContext } from "react";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import CarouselCard from "@/layouts/Carousel/CarouselCard";
import SlideCard from "@/layouts/Carousel/SlideCard";
import { GameContext } from "./GameLayout";

const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GameRecommendation() {
  const game = useContext(GameContext);

  return game?.similar_games ? (
    <MUIStack gap={1} my={4}>
      <MUITypography variant="h3" sx={h3}>
        {"Recommendations"}
      </MUITypography>
      <CarouselCard
        slides={game.similar_games.map((similarGame) => (
          <SlideCard key={similarGame.id} type="games" data={similarGame} />
        ))}
      />
    </MUIStack>
  ) : (
    ""
  );
}
