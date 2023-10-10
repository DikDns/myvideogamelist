"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import FranchiseDetailHeader from "./FranchiseDetailHeader";
import FranchiseDetailGames from "./FranchiseDetailGames";
import Franchises from "../types/Franchise";

export default function FranchiseDetailLayout({ data }: { data: Franchises }) {
  return (
    <MUIContainer>
      <Breadcrumbs />

      <FranchiseDetailHeader name={data.name || "Undefined"} />

      <FranchiseDetailGames games={data.games || []} />
    </MUIContainer>
  );
}
