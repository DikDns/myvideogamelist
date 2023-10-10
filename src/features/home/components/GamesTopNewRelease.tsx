"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import SlideHeadline from "./Carousel/SlideHeadline";
import CarouselCard from "./Carousel/CarouselCard";
import { HomeDataContext } from "./HomeLayout";

const h1: SxProps = {
  fontSize: {
    xs: "2rem",
    sm: "3rem",
    md: "3.5rem",
  },
  fontWeight: "700",
  letterSpacing: "2px",
};

export default function GamesTopNewRelease() {
  const { topNewReleaseGames } = useContext(HomeDataContext);

  return (
    <MUIBox component="section" mb={5}>
      <MUITypography sx={h1} variant="h1" mb={2}>
        {"Top New Releases"}
      </MUITypography>

      <CarouselCard
        slides={topNewReleaseGames.map((game) => (
          <SlideHeadline key={game.id} game={game} />
        ))}
      />

      <MUIBox mt={2}>
        <MUILink component={NextLink} href="/games?bracket=top-new-releases">
          See More
        </MUILink>
      </MUIBox>
    </MUIBox>
  );
}
