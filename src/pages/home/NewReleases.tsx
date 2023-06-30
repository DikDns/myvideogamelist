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
  console.log(data);
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography variant="h3" mb={2}>{`New Release Video Games`}</Typography>
      <CardCarousel>
        <CardList data={data} />
      </CardCarousel>
    </Container>
  );
}
