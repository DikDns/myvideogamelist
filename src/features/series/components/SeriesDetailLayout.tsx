"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import SeriesDetailHeader from "./SeriesDetailHeader";
import SeriesDetailGames from "./SeriesDetailGames";
import Series from "../types/Series";

export default function SeriesDetailLayout({ data }: { data: Series }) {
  return (
    <MUIContainer>
      <Breadcrumbs />

      <SeriesDetailHeader name={data.name ?? "Undefined"} />

      <SeriesDetailGames games={data.games ?? []} />
    </MUIContainer>
  );
}
