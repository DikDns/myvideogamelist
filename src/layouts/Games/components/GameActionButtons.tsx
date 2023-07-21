"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import { signIn } from "next-auth/react";
import { GameListUser } from "../types/GameListUser";
import { Session } from "next-auth";

export default function GameActionButtons({
  gameListUser,
  session,
}: {
  gameListUser: GameListUser | null;
  session: Session | null;
}) {
  const [isFavorited, setIsFavorited] = useState(gameListUser?.isFavorited);
  const [status, setStatus] = useState(gameListUser?.status);

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
        color={isFavorited ? "secondary" : "inherit"}
        sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
        onClick={() =>
          session ? setIsFavorited((prevValue) => !prevValue) : signIn("auth0")
        }
      >
        <Favorite fontSize="small" />
        {`Favorite${isFavorited ? "d" : ""}`}
      </Button>
      <Button
        variant={gameListUser ? "outlined" : "contained"}
        color={
          status === "DROPPED"
            ? "error"
            : status === "ONHOLD"
            ? "warning"
            : "primary"
        }
        onClick={() => (session ? handleDialog() : signIn("auth0"))}
      >
        {gameListUser ? `${gameListUser.status}` : `Add to List`}
      </Button>
    </Box>
  );
}
