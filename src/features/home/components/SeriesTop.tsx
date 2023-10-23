"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import SlideCard from "@/layouts/Carousel/SlideCard";
import CarouselCard from "@/layouts/Carousel/CarouselCard";
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

export default function SeriesTop() {
  const { topSeries } = useContext(HomeDataContext);

  return (
    <MUIBox component="section" mb={5}>
      <MUITypography sx={h2} variant="h2" mb={2}>
        {"Top Series"}
      </MUITypography>

      <CarouselCard
        slides={topSeries.map((series) => (
          <SlideCard key={series.id} type="series" data={series} />
        ))}
      />

      <MUIBox mt={1}>
        <MUILink component={NextLink} href="/series">
          See More
        </MUILink>
      </MUIBox>
    </MUIBox>
  );
}
