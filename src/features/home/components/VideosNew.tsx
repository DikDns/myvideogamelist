"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import SlideVideo from "@/layouts/Carousel/SlideVideo";
import CarouselMedia from "@/layouts/Carousel/CarouselMedia";
import { HomeDataContext } from "./HomeLayout";

const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function VideosNew() {
  const { newTrailers } = useContext(HomeDataContext);

  return (
    <MUIBox component="section" mb={5}>
      <MUITypography sx={h3} variant="h3" mb={2}>
        {"New Trailers"}
      </MUITypography>

      <CarouselMedia
        slides={newTrailers.map((trailer) => (
          <SlideVideo key={trailer.id} video={trailer} />
        ))}
      />

      <MUIBox mt={1}>
        <MUILink component={NextLink} href="/videos">
          See More
        </MUILink>
      </MUIBox>
    </MUIBox>
  );
}
