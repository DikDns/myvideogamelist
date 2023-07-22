"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";

export default function Loading() {
  return (
    <Paper
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Paper>
  );
}
