"use client";

import { ChangeEvent, useTransition } from "react";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import MUITextField from "@mui/material/TextField";
import MUIFormHelperText from "@mui/material/FormHelperText";
import MUIButton from "@mui/material/Button";
import IMSaveIcon from "@mui/icons-material/Save";
import { updateProfile } from "../../lib/nextServerProfile";
import { ProfileInformation } from "../../hooks/useProfileInformation";

const bioMaxLength = 190;

export default function ProfileInformationBioEdit({
  profileInformation,
}: {
  profileInformation: ProfileInformation;
}) {
  const { user, bio, steamUsername, setBio, setSteamUsername, setOnEdit } =
    profileInformation;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition();

  const handleSteamUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;

    if (bio.length > bioMaxLength) {
      return setSteamUsername(
        event.target.value.substring(0, bioMaxLength).toLowerCase()
      );
    }

    setSteamUsername(event.target.value.toLowerCase());
  };

  const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;
    if (bio.length > bioMaxLength) {
      return setBio(event.target.value.substring(0, bioMaxLength));
    }
    setBio(event.target.value);
  };

  const handleBioSave = () => {
    if (!user?.id) return;

    startTransition(() => updateProfile(user.id, bio, steamUsername));
    setOnEdit(false);
  };

  return (
    <MUIStack mt={1} gap={1}>
      <MUIBox>
        <MUITextField
          fullWidth
          id={"user-bio"}
          label={"Bio"}
          multiline
          value={bio}
          onChange={handleBioChange}
          aria-describedby="max-bio-char-length"
        />
        <MUIFormHelperText id="max-bio-char-length">
          {`${bio.length}/${bioMaxLength}`}
        </MUIFormHelperText>
      </MUIBox>
      <MUITextField
        fullWidth
        id={"user-steam"}
        label={"Steam Username"}
        multiline
        value={steamUsername}
        onChange={handleSteamUsernameChange}
      />
      <MUIButton
        aria-label="save bio"
        variant="text"
        color="secondary"
        onClick={handleBioSave}
        disabled={bio.length > bioMaxLength}
      >
        <IMSaveIcon sx={{ mr: 1 }} /> Save Bio
      </MUIButton>
    </MUIStack>
  );
}
