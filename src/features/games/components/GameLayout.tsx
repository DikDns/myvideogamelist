"use client";

import MUIContainer from "@mui/material/Container";
import MUIBox from "@mui/material/Box";
import GameMainLayout from "./GameMainLayout/GameMainLayout";
import GameHeading from "./GameHeading";
import GameInformation from "./GameInformation";
import GameRecommendation from "./GameRecommendation";
import { ListStatus } from "@prisma/client";
import { createContext } from "react";
import Game from "../types/Game";

/**
 * Represents the user's game list.
 */
type GameListUser = {
  isFavorited: boolean | null;
  status: ListStatus | null;
  score: number | null;
};

/**
 * Context for the current game being displayed.
 */
export const GameContext = createContext<Game | null>(null);

/**
 * Context for the user's game list.
 */
export const GameListUserContext = createContext<GameListUser | null>(null);

/**
 * Renders the layout for a single game.
 * @param game - The game to display.
 * @param userGameList - The user's game list.
 */
export default function Game({
  game,
  userGameList,
}: {
  game: Game;
  userGameList: GameListUser | null;
}) {
  return (
    <GameContext.Provider value={game}>
      <GameListUserContext.Provider value={userGameList}>
        <GameHeading />

        <MUIContainer sx={{ overflow: "hidden" }}>
          <MUIBox
            sx={{
              display: { md: "grid" },
              gridTemplateColumns: { md: "75% 25%" },
            }}
          >
            <GameMainLayout />

            <GameAsideLayout />
          </MUIBox>

          <GameRecommendation />
        </MUIContainer>
      </GameListUserContext.Provider>
    </GameContext.Provider>
  );
}

/**
 * Renders the layout for the game information aside.
 */
function GameAsideLayout() {
  return (
    <MUIBox component="aside">
      <GameInformation />
    </MUIBox>
  );
}
