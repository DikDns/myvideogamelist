"use client";

import { ReactNode, useContext } from "react";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";
import GameCompanies from "./GameCompanies";
import GameAgeRatings from "./GameAgeRatings";
import Game from "../types/Game";
import { GameContext } from "./GameLayout";

const h4: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "1.5rem",
    md: "2rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GameInformation() {
  const game = useContext(GameContext) as Game;

  return (
    <MUIStack gap={1} mt={2} ml={4}>
      <MUITypography variant="h4" sx={h4}>
        Information
      </MUITypography>

      {game.alternative_names ? (
        <InformationStack label="Alternative Titles">
          {game.alternative_names.map((alternative) => (
            <MUIStack key={alternative.id} direction="row" gap={1}>
              {alternative.comment ? (
                <InformationStackItem>
                  {alternative.comment}:
                </InformationStackItem>
              ) : (
                ""
              )}
              <InformationStackItem>{alternative.name}</InformationStackItem>
            </MUIStack>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.involved_companies ? (
        <GameCompanies type="developer" data={game.involved_companies} />
      ) : (
        ""
      )}

      {game.involved_companies ? (
        <GameCompanies type="publisher" data={game.involved_companies} />
      ) : (
        ""
      )}

      {game.game_modes ? (
        <InformationStack label="Game Modes">
          {game.game_modes.map((gameMode) => (
            <InformationStackItem key={gameMode.id}>
              {gameMode.name}
            </InformationStackItem>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.genres ? (
        <InformationStack label="Genres">
          {game.genres.map((genre) => (
            <InformationStackItem key={genre.id}>
              {genre.name}
            </InformationStackItem>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.themes ? (
        <InformationStack label="Themes">
          {game.themes.map((theme) => (
            <InformationStackItem key={theme.id}>
              {theme.name}
            </InformationStackItem>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.player_perspectives ? (
        <InformationStack label="Player Perspectives">
          {game.player_perspectives.map((playerPerspective) => (
            <InformationStackItem key={playerPerspective.id}>
              {playerPerspective.name}
            </InformationStackItem>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.age_ratings ? (
        <InformationStack label="Age Ratings" direction="row" gap={1}>
          <GameAgeRatings ageRatings={game.age_ratings} />
        </InformationStack>
      ) : (
        ""
      )}
    </MUIStack>
  );
}

function InformationStack({
  label,
  children,
  direction = "column",
  gap,
}: {
  label: string;
  children: ReactNode;
  direction?: "column" | "row";
  gap?: string | number;
}) {
  return (
    <div>
      <MUITypography variant="body1" fontWeight={500}>
        {label}
      </MUITypography>
      <MUIStack direction={direction} gap={gap} flexWrap="wrap">
        {children}
      </MUIStack>
    </div>
  );
}

function InformationStackItem({ children }: { children: ReactNode }) {
  return (
    <MUITypography variant="body2" color="#cfcfcf">
      {children}
    </MUITypography>
  );
}
