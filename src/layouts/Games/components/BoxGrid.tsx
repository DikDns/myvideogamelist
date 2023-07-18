"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { SxProps } from "@mui/material/styles";

export default function BoxGrid({
  label,
  children,
  sx,
  direction = "column",
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  sx?: SxProps;
  direction?: "column" | "row";
}) {
  return direction === "row" ? (
    <Stack sx={{ gap: 1, ...sx }}>
      <Typography variant="body1">
        <strong
          style={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
        >
          <span>{label}</span>
          <span>:</span>
        </strong>
      </Typography>
      <Stack>{children}</Stack>
    </Stack>
  ) : (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "start",
        gap: 1,
        ...sx,
      }}
    >
      <Typography variant="body1">
        <strong style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{label}</span>
          <span>:</span>
        </strong>
      </Typography>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}
