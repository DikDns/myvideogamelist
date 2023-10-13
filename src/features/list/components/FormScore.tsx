"use client";

import { useState, useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import MUIFormControl from "@mui/material/FormControl";
import MUIInputLabel from "@mui/material/InputLabel";
import MUIMenuItem from "@mui/material/MenuItem";
import { updateScore } from "../lib/nextServerList";
import GameList from "../types/GameList";

export default function FormScore({ list }: { list: GameList }) {
  const { user } = useUser();

  const [score, setScore] = useState(list.score);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransitionScore] = useTransition();

  const handleScoreChange = (event: SelectChangeEvent<number>) => {
    if (!user) return;
    if (!user.id) return;

    const score = event.target.value as number;

    setScore(score);
    startTransitionScore(() => updateScore(user.id, list.gameId, score));
  };

  return (
    <MUIFormControl fullWidth>
      <MUIInputLabel id="list-score-label">Score</MUIInputLabel>
      <MUISelect
        labelId="list-score-label"
        id="list-score-select"
        value={score || ""}
        label="Status"
        onChange={handleScoreChange}
      >
        <MUIMenuItem value={10}>{"10 - MASTERPIECE"}</MUIMenuItem>
        <MUIMenuItem value={9}>{"9 - GREAT"}</MUIMenuItem>
        <MUIMenuItem value={8}>{"8 - VERY GOOD"}</MUIMenuItem>
        <MUIMenuItem value={7}>{"7 - GOOD"}</MUIMenuItem>
        <MUIMenuItem value={6}>{"6 - FINE"}</MUIMenuItem>
        <MUIMenuItem value={5}>{"5 - AVERAGE"}</MUIMenuItem>
        <MUIMenuItem value={4}>{"4 - BAD"}</MUIMenuItem>
        <MUIMenuItem value={3}>{"3 - VERY BAD"}</MUIMenuItem>
        <MUIMenuItem value={2}>{"2 - HORRIBLE"}</MUIMenuItem>
        <MUIMenuItem value={1}>{"1 - APPALLING"}</MUIMenuItem>
        <MUIMenuItem value={0}>
          <em>{"None"}</em>
        </MUIMenuItem>
      </MUISelect>
    </MUIFormControl>
  );
}
