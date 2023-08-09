"use client";

import { Game } from "@/types/Game";
import { GameListUser } from "./types/GameListUser";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import GameHeading from "./components/GameHeading";
import GameSummary from "./components/GameSummary";
import GameMedia from "./components/GameMedia";
import GameRelatedContent from "./components/GameRelatedContent";
import GameResources from "./components/GameResources";
import GameInformation from "./components/GameInformation";
import GameRecomendation from "./components/GameRecomendation";
import GameActionButtons from "./components/GameActionButtons";

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
      <Container sx={{ overflow: "hidden" }}>
        <Box
          sx={{
            display: { md: "grid" },
            gridTemplateColumns: { md: "75% 25%" },
          }}
        >
          <Box component="main">
            <BasicBreadcrumbs />
            <GameActionButtons game={game} gameListUser={userGameList} />
            <GameSummary game={game} />
            <GameMedia game={game} />
            <GameRelatedContent game={game} />
            <GameResources game={game} />
          </Box>
          <Box component="aside">
            <GameInformation game={game} />
          </Box>
        </Box>
        <GameRecomendation game={game} />
      </Container>
    </>
  );
}
