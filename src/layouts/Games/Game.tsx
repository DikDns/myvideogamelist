"use client";

import { useEffect } from "react";
import { Game } from "@/types/Game";
import { UserGameList } from "./types/UserGameList";
import Container from "@mui/material/Container";
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
  userGameList: UserGameList | null;
}) {
  useEffect(() => {
    console.log(game);
    console.log(userGameList);
  }, []);

  return (
    <>
      {/* Heading: Game Cover and Name */}
      {/*// TODO add aggregated rating display */}
      <GameHeading game={game} />

      {/* Game Information: Genres, Platforms, Summary */}
      <Container component="main" sx={{ overflow: "hidden" }}>
        <GameActionButtons userGameList={userGameList} />
        <GameSummary game={game} />
        <GameMedia game={game} />
        <GameRelatedContent game={game} />
        <GameResources game={game} />
        <GameInformation game={game} />
        <GameRecomendation game={game} />
      </Container>
    </>
  );
}
