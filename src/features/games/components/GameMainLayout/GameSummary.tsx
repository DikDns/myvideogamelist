"use client";

import { useState, useContext } from "react";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import truncStr from "@/utils/truncStr";
import BoxGrid from "../BoxGrid";
import { GameContext } from "../GameLayout";

export default function GameSummary() {
  const game = useContext(GameContext);

  return (
    <MUIStack my={1} mb={2}>
      <BoxGrid sx={{ gridTemplateColumns: "90px auto" }} label={"Genre"}>
        {game?.genres?.map((genre) => genre.name).join(", ")}
      </BoxGrid>

      <BoxGrid sx={{ gridTemplateColumns: "90px auto" }} label={"Platforms"}>
        {game?.platforms?.map((platform) => platform.abbreviation).join(", ")}
      </BoxGrid>

      <MUITypography variant="body1">
        {game?.summary ? <ReadMore summary={game.summary} /> : "No Summary"}
      </MUITypography>
    </MUIStack>
  );
}

function ReadMore({ summary }: { summary: string }) {
  const [isReadMoreSumary, setIsReadMoreSummary] = useState(false);

  const handleReadMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsReadMoreSummary((prev) => !prev);
  };

  return isReadMoreSumary ? (
    <>
      {summary}

      <MUILink href="#" onClick={handleReadMore}>
        Read Less
      </MUILink>
    </>
  ) : (
    <>
      {truncStr(summary, 128)}

      <MUILink href="#" onClick={handleReadMore}>
        Read More
      </MUILink>
    </>
  );
}
