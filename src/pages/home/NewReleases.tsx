"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import CardList from "./CardList";

export interface NewReleaseData {
  id: number;
  name: string;
  cover: {
    id: number;
    image_id: string;
  };
}

export default function NewReleases({ data }: { data: NewReleaseData[] }) {
  return (
    <Container style={{ overflow: "hidden" }}>
      <Typography variant="h3">{`New Release Video Games`}</Typography>
      <CardCarousel>
        <CardList data={data} />
      </CardCarousel>
    </Container>
  );
}
