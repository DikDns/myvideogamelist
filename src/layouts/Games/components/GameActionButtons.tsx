"use client";

import Box from "@mui/material/Box";
import LoginButton from "@/components/NextAuth/LoginButton";
import GameFavoriteButton from "./GameFavoriteButton";
import GameListButton from "./GameListButton";
import { Session } from "next-auth";
import { Game } from "@/types/Game";
import { GameListUser } from "../types/GameListUser";

export default function GameActionButtons({
  game,
  gameListUser,
  session,
}: {
  game: Game;
  session: Session | null;
  gameListUser: GameListUser | null;
}) {
  return (
    <Box
      mt={2}
      mb={3}
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: !session ? "1fr" : "1fr 1fr",
      }}
    >
      {!session ? (
        <LoginButton />
      ) : (
        <>
          <GameFavoriteButton
            isFavorited={gameListUser?.isFavorited || null}
            game={game}
            user={session.user}
          />
          <GameListButton
            gameListUser={gameListUser}
            game={game}
            user={session.user}
          />
        </>
      )}
    </Box>
  );
}
