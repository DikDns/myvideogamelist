"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GameCompany from "./GameCompany";
import GameAgeRatings from "./GameAgeRatings";
import { h4 } from "@/layouts/styles";
import { Game } from "@/types/Game";
import { ReactNode } from "react";

export default function GameInformation({ game }: { game: Game }) {
  return (
    <Stack gap={1} my={5}>
      <Typography mb={1} variant="h4" sx={h4}>
        Information
      </Typography>

      {game.alternative_names ? (
        <InformationStack label="Alternative Titles">
          {game.alternative_names.map((alternative) => (
            <Stack key={alternative.id} direction="row" gap={1}>
              {alternative.comment ? (
                <InformationStackItem>
                  {alternative.comment}:
                </InformationStackItem>
              ) : (
                ""
              )}
              <InformationStackItem>{alternative.name}</InformationStackItem>
            </Stack>
          ))}
        </InformationStack>
      ) : (
        ""
      )}

      {game.involved_companies ? (
        <GameCompany type="developer" data={game.involved_companies} />
      ) : (
        ""
      )}

      {game.involved_companies ? (
        <GameCompany type="publisher" data={game.involved_companies} />
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
    </Stack>
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
      <Typography variant="body1" fontWeight={500}>
        {label}
      </Typography>
      <Stack direction={direction} gap={gap} flexWrap="wrap">
        {children}
      </Stack>
    </div>
  );
}

function InformationStackItem({ children }: { children: ReactNode }) {
  return (
    <Typography variant="body2" color="#cfcfcf">
      {children}
    </Typography>
  );
}
