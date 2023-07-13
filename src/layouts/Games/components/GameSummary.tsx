"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import truncStr from "@/utils/truncStr";
import { Game } from "@/types/Game";

const BoxRowGrid = {
  display: "grid",
  gridTemplateColumns: "90px auto",
  justifyContent: "start",
  gap: 1,
};

function BoxRow({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Box sx={BoxRowGrid}>
      <Typography variant="body1">
        <strong style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{label}</span>
          <span>:</span>
        </strong>
      </Typography>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}

export default function GameSummary({ game }: { game: Game }) {
  const [isReadMoreSumary, setIsReadMoreSummary] = useState(false);

  return (
    <Stack gap={2} mb={5} mt={2}>
      <BoxRow label={`Genre`}>
        {game.genres?.map((genre) => genre.name).join(", ")}
      </BoxRow>

      <BoxRow label={`Platforms`}>
        {game.platforms?.map((platform) => platform.abbreviation).join(", ")}
      </BoxRow>

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
