"use client";

import MUIContainer from "@mui/material/Container";
import MUIStack from "@mui/material/Stack";
import ProfileNetwork from "./ProfileNetwork";
import ProfileInformationLayout from "./ProfileInformation/ProfileInformationLayout";
import ProfileGamesLayout from "./ProfileGames/ProfileGamesLayout";

export default function Profile() {
  return (
    <MUIContainer>
      <MUIStack gap={2}>
        <ProfileInformationLayout />

        <ProfileNetwork />

        <ProfileGamesLayout />
      </MUIStack>
    </MUIContainer>
  );
}
