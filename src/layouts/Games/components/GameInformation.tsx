"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GameCompany from "./GameCompany";
import { h4 } from "@/layouts/styles";
import { Game } from "@/types/Game";

export default function GameInformation({ game }: { game: Game }) {
  return (
    <Stack gap={1} my={5}>
      <Typography mb={1} variant="h4" sx={h4}>
        Information
      </Typography>

      {game.alternative_names ? (
        <Stack>
          <Typography variant="body1" fontWeight={500}>
            Alternative Titles
          </Typography>
          {game.alternative_names.map((alternative) => (
            <Stack key={alternative.id} direction="row" gap={1}>
              <Typography variant="body2" color="#cfcfcf">
                {alternative.comment}:
              </Typography>
              <Typography variant="body2" color="#cfcfcf">
                {alternative.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
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
    </Stack>
  );
}
