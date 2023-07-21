"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";

export default function GameActionButtons() {
  const [isFavorited, setIsFavorited] = useState(false);

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
        onClick={() => setIsFavorited((prevValue) => !prevValue)}
      >
        <Favorite fontSize="small" />
        {`Favorite${isFavorited ? "d" : ""}`}
      </Button>
      <Button variant="contained" color="primary">
        {`Add to List`}
      </Button>
    </Box>
  );
}
