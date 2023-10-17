"use client";

import MUIStack from "@mui/material/Stack";
import ProfileGamesPlaying from "./ProfileGamesPlaying";
import ProfileGamesLastCompleted from "./ProfileGamesLastCompleted";
import ProfileGamesFavorite from "./ProfileGamesFavorite";

export default function ProfileGames() {
  return (
    <MUIStack gap={2} mt={2}>
      <ProfileGamesPlaying />

      <ProfileGamesLastCompleted />

      <ProfileGamesFavorite />
    </MUIStack>
  );
}
