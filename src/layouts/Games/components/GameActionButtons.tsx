"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function GameActionButtons() {
  return (
    <Box
      mt={2}
      mb={3}
      sx={{ display: "grid", gap: 1, gridTemplateColumns: "auto auto" }}
    >
      <Button variant="outlined" color="secondary">
        {`Favorite`}
      </Button>
      <Button variant="contained" color="primary">
        {`Add to List`}
      </Button>
    </Box>
  );
}
