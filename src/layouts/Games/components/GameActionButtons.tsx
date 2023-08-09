"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  return (
    <>
      <SignedIn>
        <Box
          my={2}
          sx={{
            display: { xs: "grid", md: "flex" },
            gap: 2,
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <GameFavoriteButton
            isFavorited={gameListUser?.isFavorited || null}
            game={game}
          />
          <GameListButton gameListUser={gameListUser} game={game} />
        </Box>
      </SignedIn>
      <SignedOut>
        <Box
          my={2}
          sx={{
            display: { xs: "grid", md: "flex" },
            gap: 2,
            gridTemplateColumns: "1fr",
          }}
        >
          <SignInButton>
            <Button variant="contained">Sign In to Start Listing</Button>
          </SignInButton>
        </Box>
      </SignedOut>
    </>
  );
}
