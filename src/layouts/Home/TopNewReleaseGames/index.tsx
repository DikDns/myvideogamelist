"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import TopNewReleaseGamesList from "./TopNewReleaseGamesList";
import { VideoGame } from "@/types/VideoGameType";

const h1Style = {
  fontSize: {
    xs: "2rem",
    sm: "3rem",
    md: "3.5rem",
  },
};

export default function TopNewReleaseGames({ data }: { data: VideoGame[] }) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h1Style} variant="h1" mb={2}>
        {`Top New Release`}
      </Typography>
      <CardCarousel size="lg">
        <TopNewReleaseGamesList data={data} />
      </CardCarousel>
    </Container>
  );
}