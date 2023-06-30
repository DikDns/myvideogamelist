"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import TopFranchisesList from "./TopFranchisesList";
import { TopFranchisesData } from "./TopFranchisesInterface";

const h2Style = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
};

export default function TopFranchises({ data }: { data: TopFranchisesData[] }) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h2Style} variant="h2" mb={2}>
        {`Top Franchises`}
      </Typography>
      <CardCarousel>
        <TopFranchisesList data={data} />
      </CardCarousel>
    </Container>
  );
}
