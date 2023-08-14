"use client";

import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
} from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { User } from "../User";

const bioMaxLength = 190;
const defaultBio = "A gamer who hasn't set their bio yet.";

export default function BioControlled({ user }: { user: User }) {
  const [bio, setBio] = useState(user.bio || defaultBio);
  const [onEdit, setOnEdit] = useState(false);

  return (
    <Box>
      {!onEdit && <BioDisplay bio={bio} setOnEdit={setOnEdit} />}
      {onEdit && <BioInput bio={bio} setBio={setBio} setOnEdit={setOnEdit} />}
    </Box>
  );
}

function BioDisplay({
  bio,
  setOnEdit,
}: {
  bio: string;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Stack gap={1}>
      <Typography variant="body2">{bio}</Typography>

      <Button
        aria-label="edit bio"
        variant="text"
        color="info"
        onClick={() => setOnEdit(true)}
      >
        <EditIcon sx={{ mr: 1 }} /> Edit Bio
      </Button>
    </Stack>
  );
}

function BioInput({
  bio,
  setBio,
  setOnEdit,
}: {
  bio: string;
  setBio: Dispatch<SetStateAction<string>>;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
}) {
  const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;
    if (bio.length > bioMaxLength) {
      return setBio(event.target.value.substring(0, bioMaxLength));
    }
    setBio(event.target.value);
  };

  const handleBioSave = (event: MouseEvent<HTMLButtonElement>) => {
    setOnEdit(false);
  };

  return (
    <Stack mt={1} gap={1}>
      <Box>
        <TextField
          fullWidth
          id={`user-bio`}
          label={`Bio`}
          multiline
          value={bio}
          onChange={handleBioChange}
          aria-describedby="max-bio-char-length"
        />
        <FormHelperText id="max-bio-char-length">{`${bio.length}/${bioMaxLength}`}</FormHelperText>
      </Box>
      <Button
        aria-label="save bio"
        variant="text"
        color="secondary"
        onClick={handleBioSave}
        disabled={bio.length > bioMaxLength}
      >
        <SaveIcon sx={{ mr: 1 }} /> Save Bio
      </Button>
    </Stack>
  );
}
