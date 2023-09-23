"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import MUIButton from "@mui/material/Button";
import IMFavorite from "@mui/icons-material/Favorite";
import { updateIsFavorited } from "../lib/nextServerFavoriteButton";
import Game from "../types/Game";

export default function GameFavoriteButton({
  isFavorited,
  game,
}: {
  isFavorited: boolean | null;
  game: Game;
}) {
  const [favoriteOptimistic, addFavoriteOptimistic] = useOptimistic(
    {
      isFavorited: isFavorited,
      sending: false,
    },
    (state, newState: boolean) => ({
      ...state,
      isFavorited: newState,
      sending: true,
    })
  );

  const handleFavorite = async () => {
    addFavoriteOptimistic(!favoriteOptimistic.isFavorited);
    await updateIsFavorited(game.id, !favoriteOptimistic.isFavorited);
  };

  return (
    <MUIButton
      variant="outlined"
      color={favoriteOptimistic.isFavorited ? "secondary" : "inherit"}
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        width: { md: "200px" },
      }}
      onClick={() => handleFavorite()}
    >
      <IMFavorite fontSize="small" />
      {`Favorite${favoriteOptimistic.isFavorited ? "d" : ""}`}
    </MUIButton>
  );
}
