"use client";

import { useAuth } from "@clerk/nextjs";
import { experimental_useOptimistic as useOptimistic } from "react";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import { updateIsFavorited } from "../Server/Actions";
import { Game } from "@/types/Game";

export default function GameFavoriteButton({
  isFavorited,
  game,
}: {
  isFavorited: boolean | null;
  game: Game;
}) {
  const { userId } = useAuth();
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
    await updateIsFavorited(
      userId || "",
      game.id,
      !favoriteOptimistic.isFavorited
    );
  };

  return (
    <Button
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
      <Favorite fontSize="small" />
      {`Favorite${favoriteOptimistic.isFavorited ? "d" : ""}`}
    </Button>
  );
}
