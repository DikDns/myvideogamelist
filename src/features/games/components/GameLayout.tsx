"use client";

import MUIContainer from "@mui/material/Container";
import MUIBox from "@mui/material/Box";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import GameHeading from "./GameHeading";
import GameSummary from "./GameSummary";
import GameMedia from "./GameMedia";
import GameRelatedContent from "./GameRelatedContent";
import GameResources from "./GameResources";
import GameInformation from "./GameInformation";
import GameRecommendation from "./GameRecommendation";
import GameButtons from "./GameButtons";
import { ListStatus } from "@prisma/client";
import Game from "../types/Game";

type GameListUser = {
  isFavorited: boolean | null;
  status: ListStatus | null;
  score: number | null;
};

export default function Game({
  game,
  userGameList,
}: {
  game: Game;
  userGameList: GameListUser | null;
}) {
  return (
    <>
      {/* Heading: Game Cover and Name */}
      {/*// TODO add aggregated rating display */}
      <GameHeading game={game} />

      {/* Game Information: Genres, Platforms, Summary */}
      <MUIContainer sx={{ overflow: "hidden" }}>
        <MUIBox
          sx={{
            display: { md: "grid" },
            gridTemplateColumns: { md: "75% 25%" },
          }}
        >
          <MUIBox component="main">
            <BasicBreadcrumbs />
            <GameButtons game={game} gameListUser={userGameList} />
            <GameSummary game={game} />
            <GameMedia game={game} />
            <GameRelatedContent game={game} />
            <GameResources game={game} />
          </MUIBox>
          <MUIBox component="aside">
            <GameInformation game={game} />
          </MUIBox>
        </MUIBox>
        <GameRecommendation game={game} />
      </MUIContainer>
    </>
  );
}
