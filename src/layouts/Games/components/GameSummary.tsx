"use client";

import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import truncStr from "@/utils/truncStr";
import { Game } from "@/types/Game";
import BoxGrid from "./BoxGrid";

export default function GameSummary({ game }: { game: Game }) {
  const [isReadMoreSumary, setIsReadMoreSummary] = useState(false);

  return (
    <Stack my={1} mb={2}>
      <BoxGrid sx={{ gridTemplateColumns: "90px auto" }} label={`Genre`}>
        {game.genres?.map((genre) => genre.name).join(", ")}
      </BoxGrid>

      <BoxGrid sx={{ gridTemplateColumns: "90px auto" }} label={`Platforms`}>
        {game.platforms?.map((platform) => platform.abbreviation).join(", ")}
      </BoxGrid>

      <Typography variant="body1">
        {game.summary ? (
          isReadMoreSumary ? (
            game.summary
          ) : (
            <>
              {`${truncStr(game.summary, 128)} `}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsReadMoreSummary((prevValue) => !prevValue);
                }}
              >
                Read More
              </Link>
            </>
          )
        ) : (
          "No Summary"
        )}
      </Typography>
    </Stack>
  );
}
