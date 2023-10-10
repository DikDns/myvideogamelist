"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import FranchisesInfiniteLoad from "./FranchisesInfiniteLoad";

export default function FranchisesLayout() {
  return (
    <MUIContainer>
      <Breadcrumbs />

      <FranchisesInfiniteLoad />
    </MUIContainer>
  );
}
