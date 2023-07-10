"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import TopList from "./TopList";
import { List, TopData } from "./TopSection";

const h2Style = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
};

export default function TopSection({
  data,
  text,
  type,
}: {
  data: TopData[];
  text: React.ReactNode;
  type: List;
}) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h2Style} variant="h2" mb={2}>
        {text}
      </Typography>
      <CardCarousel>
        <TopList data={data} type={type} />
      </CardCarousel>
    </Container>
  );
}
