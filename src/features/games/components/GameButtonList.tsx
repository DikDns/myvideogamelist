"use client";

import { useState, useTransition } from "react";
import MUIButton from "@mui/material/Button";
import MUIDialog from "@mui/material/Dialog";
import MUIDialogActions from "@mui/material/DialogActions";
import MUIDialogContent from "@mui/material/DialogContent";
import MUIDialogTitle from "@mui/material/DialogTitle";
import MUIInputLabel from "@mui/material/InputLabel";
import MUIMenuItem from "@mui/material/MenuItem";
import MUIFormControl from "@mui/material/FormControl";
import MUISelect from "@mui/material/Select";
import { ListStatus } from "@prisma/client";
import Game from "../types/Game";
import { updateList } from "../lib/nextServerButtonList";

type GameListUser = {
  isFavorited: boolean | null;
  status: ListStatus | null;
  score: number | null;
};

export default function GameListButton({
  gameListUser,
  game,
}: {
  gameListUser: GameListUser | null;
  game: Game;
}) {
  const [list, setList] = useState({
    status: gameListUser?.status,
    score: gameListUser?.score,
  });
  const [status, setStatus] = useState(gameListUser?.status);
  const [score, setScore] = useState(gameListUser?.score);
  const [, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setStatus(list.status);
    setScore(list.score);
    setOpen(false);
  };

  const handleDialogSave = () => {
    setList({ status, score });
    setOpen(false);
    return startTransition(() => updateList(game.id, status, score));
  };

  const buttonColor = list?.status === "ONHOLD" ? "warning" : "primary";

  return (
    <>
      <MUIButton
        variant={list?.status ? "outlined" : "contained"}
        color={list?.status === "DROPPED" ? "error" : buttonColor}
        onClick={() => {
          setOpen(true);
          setStatus(list?.status ? list.status : ListStatus.PLAYING);
        }}
        sx={{
          width: { md: "200px" },
        }}
      >
        {list?.status ? `${list?.status}` : "Add to List"}
      </MUIButton>
      <MUIDialog fullWidth open={open} onClose={handleDialogClose}>
        <MUIDialogTitle>{game.name}</MUIDialogTitle>
        <MUIDialogContent>
          <MUIFormControl fullWidth sx={{ mt: 2 }}>
            <MUIInputLabel id="list-status-label">Status</MUIInputLabel>
            <MUISelect
              labelId="list-status-label"
              id="list-status-select"
              label="Status"
              value={status}
              onChange={(event) => setStatus(event.target.value as ListStatus)}
            >
              <MUIMenuItem value={ListStatus.PLAYING}>PLAYING</MUIMenuItem>
              <MUIMenuItem value={ListStatus.COMPLETED}>COMPLETED</MUIMenuItem>
              <MUIMenuItem value={ListStatus.WISHTOPLAY}>
                WISHTOPLAY
              </MUIMenuItem>
              <MUIMenuItem value={ListStatus.ONHOLD}>ONHOLD</MUIMenuItem>
              <MUIMenuItem value={ListStatus.DROPPED}>DROPPED</MUIMenuItem>
            </MUISelect>
          </MUIFormControl>
          <MUIFormControl fullWidth sx={{ mt: 2 }}>
            <MUIInputLabel id="list-score-label">Score</MUIInputLabel>
            <MUISelect
              labelId="list-score-label"
              id="list-score-select"
              value={score || ""}
              label="Status"
              onChange={(event) => setScore(event.target.value as number)}
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
        </MUIDialogContent>
        <MUIDialogActions>
          <MUIButton color="inherit" onClick={handleDialogClose}>
            Cancel
          </MUIButton>
          <MUIButton color="primary" onClick={handleDialogSave}>
            Save Changes
          </MUIButton>
        </MUIDialogActions>
      </MUIDialog>
    </>
  );
}
