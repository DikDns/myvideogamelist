"use client";

import { useContext, experimental_useOptimistic as useOptimistic } from "react";
import MUIButton from "@mui/material/Button";
import IMFavorite from "@mui/icons-material/Favorite";
import { updateIsFavorited } from "../../../lib/nextServerButtonFavorite";
import { GameContext, GameListUserContext } from "../../GameLayout";

export default function GameButtonFavorite() {
  const game = useContext(GameContext);
  const gameListUser = useContext(GameListUserContext);

  const [favoriteOptimistic, addFavoriteOptimistic] = useOptimistic(
    {
      isFavorited: gameListUser?.isFavorited,
      sending: false,
    },
    (state, newState: boolean) => ({
      ...state,
      isFavorited: newState,
      sending: true,
    })
  );

  const handleFavorite = async () => {
    if (!game?.id) return;

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
