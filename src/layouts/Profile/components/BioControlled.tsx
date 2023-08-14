"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import SaveIcon from "@mui/icons-material/Save";
import { User } from "../User";

export default function BioControlled({ user }: { user: User }) {
  const bioMaxLength = 190;
  const [bio, setBio] = useState(user.bio || "");

  const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;
    if (bio.length > bioMaxLength) {
      return setBio(event.target.value.substring(0, bioMaxLength));
    }
    setBio(event.target.value);
  };

  return (
    <>
      <TextField
        id={`${user.username}-bio`}
        label={`Bio`}
        multiline
        value={bio}
        onChange={handleBioChange}
        aria-describedby="max-bio-char-length"
      />
      <FormHelperText id="max-bio-char-length">{`${bio.length}/${bioMaxLength}`}</FormHelperText>
      <Button
        aria-label="save bio"
        variant="text"
        color="secondary"
        // onClick={}
        disabled={bio.length > bioMaxLength}
      >
        <SaveIcon sx={{ mr: 1 }} /> Save Bio
      </Button>
    </>
  );
}
