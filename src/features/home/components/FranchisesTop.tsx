"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import SlideCard from "./Carousel/SlideCard";
import CarouselCard from "./Carousel/CarouselCard";
import { HomeDataContext } from "./HomeLayout";

const h2: SxProps = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
  fontWeight: "600",
  letterSpacing: "1px",
};

export default function FranchisesTop() {
  const { topFranchises } = useContext(HomeDataContext);

  return (
    <MUIBox component="section" mb={5}>
      <MUITypography sx={h2} variant="h2" mb={2}>
        {"Top Franchises"}
      </MUITypography>

      <CarouselCard
        slides={topFranchises.map((franchise) => (
          <SlideCard key={franchise.id} type="franchises" data={franchise} />
        ))}
      />

      <MUIBox mt={1}>
        <MUILink component={NextLink} href="/franchises">
          See More
        </MUILink>
      </MUIBox>
    </MUIBox>
  );
}
