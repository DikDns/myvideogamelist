"use client";

import MUIBox from "@mui/material/Box";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import GameButtons from "./GameButtons/GameButtons";
import GameMedia from "./GameMedia/GameMedia";
import GameSummary from "./GameSummary";
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
