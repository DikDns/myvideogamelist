"use client";

import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularLoading() {
  return (
    <Grid
      overflow="hidden"
      container
      py={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
