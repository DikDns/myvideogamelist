"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardGame from "@/components/Game/CardGame";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { cardGameContainer, h3 } from "../styles";
import { Series } from "@/types/Series";

export default function Serie({ data }: { data: Series }) {
  return (
    <Container>
      <Box sx={{ mb: { sm: 3, xs: 2 } }}>
        <BasicBreadcrumbs />
      </Box>
      <Typography mb={1} variant="h3" sx={h3}>
        {data.name} Series
      </Typography>
      <Box sx={cardGameContainer}>
        {/* @ts-ignore */}
        {data.games.map((game, i) => (
          <CardGame key={i} game={game} />
        ))}
      </Box>
    </Container>
  );
}
