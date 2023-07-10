"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import VideoCarousel from "@/components/Carousel/VideoCarousel";
import NewTrailersList from "./NewTrailersList";
import { NewTrailersData } from "./NewTrailers";

const h3Style = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
};

export default function NewTrailers({ data }: { data: NewTrailersData[] }) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h3Style} variant="h3" mb={2}>
        {`New Trailers`}
      </Typography>
      <VideoCarousel>
        <NewTrailersList data={data} />
      </VideoCarousel>
    </Container>
  );
}
