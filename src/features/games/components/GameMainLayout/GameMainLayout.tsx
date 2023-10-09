"use client";

import MUIBox from "@mui/material/Box";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import GameButtons from "./GameButtons";
import GameSummary from "./GameSummary";
import GameMedia from "./GameMedia";
import GameRelatedContent from "./GameRelatedContent";
import GameResources from "./GameResources";

export default function GameMainLayout() {
  return (
    <MUIBox component="main">
      <BasicBreadcrumbs />
      <GameButtons />
      <GameSummary />
      <GameMedia />
      <GameRelatedContent />
      <GameResources />
    </MUIBox>
  );
}
