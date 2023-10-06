"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GameButtonFavorite from "./GameButtonFavorite";
import GameButtonList from "./GameButtonList";
import { Game } from "@/types/Game";
import { ListStatus } from "@prisma/client";

type GameListUser = {
  isFavorited: boolean | null;
  status: ListStatus | null;
  score: number | null;
};

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
          <GameButtonFavorite
            isFavorited={gameListUser?.isFavorited || null}
            game={game}
          />
          <GameButtonList gameListUser={gameListUser} game={game} />
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
