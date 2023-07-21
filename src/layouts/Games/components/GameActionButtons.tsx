"use client";

import { GameListUser } from "../types/GameListUser";
import { useState, experimental_useOptimistic as useOptimistic } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import { signIn } from "next-auth/react";
import { Session } from "next-auth";
import { updateIsFavorited } from "../Server/Actions";
import { Game } from "@/types/Game";

export default function GameActionButtons({
  game,
  gameListUser,
  session,
}: {
  game: Game;
  gameListUser: GameListUser | null;
  session: Session | null;
}) {
  const [optimistic, addOptimistic] = useOptimistic(
    { isFavorited: gameListUser?.isFavorited, sending: false },
    (state, newState: boolean) => ({
      ...state,
      isFavorited: newState,
      sending: true,
    })
  );
  const [status, setStatus] = useState(gameListUser?.status);

  const handleFavorite = async () => {
    if (session) {
      addOptimistic(!optimistic.isFavorited);
      await updateIsFavorited(
        session.user.id,
        game.id,
        !optimistic.isFavorited
      );
      return;
    }

    return signIn("auth0");
  };

  const handleDialog = () => {
    return;
  };

  return (
    <Box
      mt={2}
      mb={3}
      sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}
    >
      <Button
        variant="outlined"
        color={optimistic.isFavorited ? "secondary" : "inherit"}
        sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
        onClick={() => handleFavorite()}
      >
        <Favorite fontSize="small" />
        {`Favorite${optimistic.isFavorited ? "d" : ""}`}
      </Button>
      <Button
        variant={gameListUser?.status ? "outlined" : "contained"}
        color={
          status === "DROPPED"
            ? "error"
            : status === "ONHOLD"
            ? "warning"
            : "primary"
        }
        onClick={() => (session ? handleDialog() : signIn("auth0"))}
      >
        {gameListUser?.status ? `${gameListUser.status}` : `Add to List`}
      </Button>
    </Box>
  );
}
