"use client";

import NextLink from "next/link";
import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
  useTransition,
} from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { User } from "../User";
import { updateBio } from "../profileActions";

const bioMaxLength = 190;
const defaultBio = "A gamer who hasn't set their bio yet.";

export default function BioControlled({ user }: { user: User }) {
  const [bio, setBio] = useState(user.bio || defaultBio);
  const [steamUsername, setSteamUsername] = useState(
    user.gameSocialNetwork?.steamUsername || ""
  );
  const [onEdit, setOnEdit] = useState(false);

  return (
    <Box>
      {!onEdit && (
        <Stack gap={1}>
          <Typography variant="body2">{bio}</Typography>

          <Typography variant="caption">
            {steamUsername ? (
              <Link
                component={NextLink}
                href={`https://steamcommunity.com/id/${steamUsername}`}
                color="#fff"
              >
                {`steamcommunity.com/id/${steamUsername}`}
              </Link>
            ) : (
              "steamcommunity.com/id/"
            )}
          </Typography>

          <Button
            aria-label="edit bio"
            variant="text"
            color="info"
            onClick={() => setOnEdit(true)}
          >
            <EditIcon sx={{ mr: 1 }} /> Edit
          </Button>
        </Stack>
      )}
      {onEdit && (
        <BioInput
          userId={user.id}
          bio={bio}
          setBio={setBio}
          steamUsername={steamUsername}
          setSteamUsername={setSteamUsername}
          setOnEdit={setOnEdit}
        />
      )}
    </Box>
  );
}

function BioInput({
  userId,
  bio,
  setBio,
  steamUsername,
  setSteamUsername,
  setOnEdit,
}: {
  userId: string;
  bio: string;
  setBio: Dispatch<SetStateAction<string>>;
  steamUsername: string;
  setSteamUsername: Dispatch<SetStateAction<string>>;
  setOnEdit: Dispatch<SetStateAction<boolean>>;
}) {
  const [isPending, startTransition] = useTransition();

  const handleSteamUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;
    if (bio.length > bioMaxLength) {
      return setSteamUsername(event.target.value.substring(0, bioMaxLength));
    }
    setSteamUsername(event.target.value);
  };

  const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > bioMaxLength) return;
    if (bio.length > bioMaxLength) {
      return setBio(event.target.value.substring(0, bioMaxLength));
    }
    setBio(event.target.value);
  };

  const handleBioSave = (event: MouseEvent<HTMLButtonElement>) => {
    startTransition(() => updateBio(userId, bio));
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
      <TextField
        fullWidth
        id={`user-steam`}
        label={`Steam Username`}
        multiline
        value={steamUsername}
        onChange={handleSteamUsernameChange}
      />
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
