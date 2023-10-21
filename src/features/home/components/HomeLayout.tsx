"use client";

import { createContext } from "react";
import MUIContainer from "@mui/material/Container";
import GamesTopNewRelease from "./GamesTopNewRelease";
import SeriesTop from "./SeriesTop";
import FranchisesTop from "./FranchisesTop";
import VideosNew from "./VideosNew";
import GamesGrid from "./GamesGrid";
import HomeData from "../types/HomeData";

export const HomeDataContext = createContext<HomeData>(null!);

export default async function HomeLayout({ data }: { data: HomeData }) {
  return (
    <HomeDataContext.Provider value={data}>
      <MUIContainer component="main" sx={{ overflow: "hidden" }}>
        <GamesTopNewRelease />

        <SeriesTop />

        <FranchisesTop />

        <VideosNew />

        <GamesGrid />
      </MUIContainer>
    </HomeDataContext.Provider>
  );
}
