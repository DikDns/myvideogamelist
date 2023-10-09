"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import MUIBox from "@mui/material/Box";
import MUIButton from "@mui/material/Button";
import GameButtonFavorite from "./GameButtonFavorite";
import GameButtonList from "./GameButtonList";

export default function GameButtons() {
  return (
    <>
      <SignedIn>
        <MUIBox
          my={2}
          sx={{
            display: { xs: "grid", md: "flex" },
            gap: 2,
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <GameButtonFavorite />
          <GameButtonList />
        </MUIBox>
      </SignedIn>
      <SignedOut>
        <MUIBox
          my={2}
          sx={{
            display: { xs: "grid", md: "flex" },
            gap: 2,
            gridTemplateColumns: "1fr",
          }}
        >
          <SignInButton>
            <MUIButton variant="contained">Sign In to Start Listing</MUIButton>
          </SignInButton>
        </MUIBox>
      </SignedOut>
    </>
  );
}
