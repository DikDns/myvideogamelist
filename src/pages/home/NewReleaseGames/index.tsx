"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import CardList from "./CardList";
import { NewReleaseGamesData } from "./NewReleaseGamesInterface";

const h3Style = {
  fontSize: {
    xs: "2rem",
    sm: "3rem",
    md: "3.5rem",
  },
};

export default function NewReleaseGames({
  data,
}: {
  data: NewReleaseGamesData[];
}) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h3Style} variant="h3" mb={2}>
        {`New Release Games`}
      </Typography>
      <CardCarousel>
        <CardList data={data} />
      </CardCarousel>
    </Container>
  );
}
