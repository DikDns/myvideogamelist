"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { h4, h5, h6 } from "@/layouts/styles";
import { Game } from "@/types/Game";

export default function GameInformation({ game }: { game: Game }) {
  return (
    <Stack gap={1} my={5}>
      <Typography mb={1} variant="h4" sx={h4}>
        Information
      </Typography>

      {game.alternative_names ? (
        <Stack>
          <Typography mb={1} variant="body1">
            Alternative Titles
          </Typography>
          {game.alternative_names.map((alternative) => (
            <Stack key={alternative.id} direction="row" gap={1}>
              <Typography variant="body2">{alternative.comment}:</Typography>
              <Typography variant="body2">{alternative.name}</Typography>
            </Stack>
          ))}
        </Stack>
      ) : (
        ""
      )}
    </Stack>
  );
}
