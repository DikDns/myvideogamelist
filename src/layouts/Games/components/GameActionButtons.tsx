"use client";

import Box from "@mui/material/Box";
import GameFavoriteButton from "./GameFavoriteButton";
import GameListButton from "./GameListButton";
import { Game } from "@/types/Game";
import { GameListUser } from "../types/GameListUser";

export default function GameActionButtons({
  game,
  gameListUser,
}: {
  game: Game;
  gameListUser: GameListUser | null;
}) {
  const session = false;
  return (
    <Box
      my={2}
      sx={{
        display: { xs: "grid", md: "flex" },
        gap: 2,
        // TODO FIX LOGIN BUTTON
        gridTemplateColumns: !session ? "1fr" : "1fr 1fr",
      }}
    >
      {!session ? (
        // <LoginButton />
        <button>Login</button>
      ) : (
        <>
          <GameFavoriteButton
            isFavorited={gameListUser?.isFavorited || null}
            game={game}
            // user={session.user}
          />
          <GameListButton
            gameListUser={gameListUser}
            game={game}
            // user={session.user}
          />
        </>
      )}
    </Box>
  );
}
