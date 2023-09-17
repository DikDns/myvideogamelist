"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import SeriesInfiniteLoad from "./SeriesInfiniteLoad";

export default function Series() {
  return (
    <MUIContainer>
      <Breadcrumbs />

      <SeriesInfiniteLoad />
    </MUIContainer>
  );
}
