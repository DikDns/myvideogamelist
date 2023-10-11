"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import SearchInfiniteLoad from "./SearchInfiniteLoad";

export default function SearchLayout() {
  return (
    <MUIContainer component="main">
      <Breadcrumbs />

      <SearchInfiniteLoad />
    </MUIContainer>
  );
}
