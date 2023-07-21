"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";

export default function GameActionButtons({
  session,
}: {
  session: Session | null;
}) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleDialog = () => {
    return;
  };

  return (
    <Box
      mt={2}
      mb={3}
      sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}
    >
      <Button
        variant="outlined"
        color={isFavorited ? "secondary" : "inherit"}
        sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
        onClick={() =>
          session ? setIsFavorited((prevValue) => !prevValue) : signIn("auth0")
        }
      >
        <Favorite fontSize="small" />
        {`Favorite${isFavorited ? "d" : ""}`}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => (session ? handleDialog() : signIn("auth0"))}
      >
        {`Add to List`}
      </Button>
    </Box>
  );
}
