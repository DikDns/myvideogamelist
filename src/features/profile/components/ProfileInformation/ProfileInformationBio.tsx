"use client";

import MUIStack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import MUITypography from "@mui/material/Typography";
import IMEditIcon from "@mui/icons-material/Edit";
import SteamUsername from "../SteamUsername";
import ProfileInformationBioEdit from "./ProfileInformationBioEdit";
import useProfileInformation from "../../hooks/useProfileInformation";

export default function ProfileInformationBio() {
  const profileInformation = useProfileInformation();
  const { user, bio, steamUsername, onEdit, setOnEdit } = profileInformation;

  return !onEdit ? (
    <MUIStack gap={1}>
      <MUITypography variant="body2">{bio}</MUITypography>

      <SteamUsername username={steamUsername} />

      {user?.isCurrentUserProfile && (
        <Button
          aria-label="edit bio"
          variant="text"
          color="info"
          onClick={() => setOnEdit(true)}
        >
          <IMEditIcon sx={{ mr: 1 }} /> Edit
        </Button>
      )}
    </MUIStack>
  ) : (
    <ProfileInformationBioEdit profileInformation={profileInformation} />
  );
}
