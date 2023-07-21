"use client";

import { useEffect } from "react";
import { Game } from "@/types/Game";
import { GameListUser } from "./types/GameListUser";
import Container from "@mui/material/Container";
import GameHeading from "./components/GameHeading";
import GameSummary from "./components/GameSummary";
import GameMedia from "./components/GameMedia";
import GameRelatedContent from "./components/GameRelatedContent";
import GameResources from "./components/GameResources";
import GameInformation from "./components/GameInformation";
import GameRecomendation from "./components/GameRecomendation";
import GameActionButtons from "./components/GameActionButtons";
import { Session } from "next-auth";

export default function Game({
  session,
  game,
  gameListUser,
}: {
  game: Game;
  gameListUser: GameListUser | null;
  session: Session | null;
}) {
  useEffect(() => {
    console.log(game);
    console.log(gameListUser);
  }, []);

  return (
    <>
      {/* Heading: Game Cover and Name */}
      {/*// TODO add aggregated rating display */}
      <GameHeading game={game} />

      {/* Game Information: Genres, Platforms, Summary */}
      <Container component="main" sx={{ overflow: "hidden" }}>
        <GameActionButtons session={session} gameListUser={gameListUser} />
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
