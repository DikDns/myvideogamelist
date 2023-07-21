"use client";

import { GameListUser } from "../types/GameListUser";
import { useState, useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState(gameListUser?.status);

  const handleFavorite = () => {
    if (session) {
      return startTransition(() =>
        updateIsFavorited(
          session.user.id,
          game.id,
          game.slug ? game.slug : "",
          gameListUser?.isFavorited ? !gameListUser.isFavorited : true
        )
      );
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
        color={gameListUser?.isFavorited ? "secondary" : "inherit"}
        sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
        onClick={() => handleFavorite()}
      >
        <Favorite fontSize="small" />
        {`Favorite${gameListUser?.isFavorited ? "d" : ""}`}
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
