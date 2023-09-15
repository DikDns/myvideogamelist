"use client";

import MUIGrid from "@mui/material/Grid";
import MUICircularProgress from "@mui/material/CircularProgress";

export default function CircularLoading() {
  return (
    <MUIGrid
      overflow="hidden"
      container
      py={2}
      alignItems="center"
      justifyContent="center"
    >
      <MUIGrid item>
        <MUICircularProgress />
      </MUIGrid>
    </MUIGrid>
  );
}
