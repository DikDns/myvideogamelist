"use client";

import NextLink from "next/link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { h2 } from "../styles";

export default function Games() {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h2" sx={h2} mb={1}>
        Category
      </Typography>
      <Stack gap={1} direction="row" flexWrap="wrap">
        <Button LinkComponent={NextLink} href="/games/top-new-releases">
          Top New Releases
        </Button>
        <Button LinkComponent={NextLink} href="/games/top-rated">
          Top Rated
        </Button>
        <Button LinkComponent={NextLink} href="/games/top-upcoming">
          Top Upcoming
        </Button>
        <Button LinkComponent={NextLink} href="/games/new-releases">
          New Releases
        </Button>
      </Stack>
    </Container>
  );
}
