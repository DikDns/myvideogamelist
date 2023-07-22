"use client";

import { useState, useTransition } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { User } from "next-auth";
import { updateList } from "../Server/Actions";
import { GameListUser } from "../types/GameListUser";
import { Game } from "@/types/Game";
import { ListStatus } from "@prisma/client";

export default function GameListButton({
  gameListUser,
  game,
  user,
}: {
  gameListUser: GameListUser | null;
  game: Game;
  user: User;
}) {
  const [list, setList] = useState({
    status: gameListUser?.status,
    score: gameListUser?.score,
  });
  const [status, setStatus] = useState(gameListUser?.status);
  const [score, setScore] = useState(gameListUser?.score);
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const handleDialogClose = () => {
    setStatus(list.status);
    setScore(list.score);
    setOpen(false);
  };

  const handleDialogSave = () => {
    setList({ status, score });
    setOpen(false);
    return startTransition(() => updateList(user.id, game.id, status, score));
  };

  return (
    <>
      <Button
        variant={list?.status ? "outlined" : "contained"}
        color={
          list?.status === "DROPPED"
            ? "error"
            : list?.status === "ONHOLD"
            ? "warning"
            : "primary"
        }
        onClick={() => {
          setOpen(true);
          setStatus(list?.status ? list.status : ListStatus.PLAYING);
        }}
      >
        {list?.status ? `${list?.status}` : `Add to List`}
      </Button>
      <Dialog fullWidth open={open} onClose={handleDialogClose}>
        <DialogTitle>{game.name}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="list-status-label">Status</InputLabel>
            <Select
              labelId="list-status-label"
              id="list-status-select"
              label="Status"
              value={status}
              onChange={(event) => setStatus(event.target.value as ListStatus)}
            >
              <MenuItem value={ListStatus.PLAYING}>PLAYING</MenuItem>
              <MenuItem value={ListStatus.COMPLETED}>COMPLETED</MenuItem>
              <MenuItem value={ListStatus.WISHTOPLAY}>WISHTOPLAY</MenuItem>
              <MenuItem value={ListStatus.ONHOLD}>ONHOLD</MenuItem>
              <MenuItem value={ListStatus.DROPPED}>DROPPED</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="list-score-label">Score</InputLabel>
            <Select
              labelId="list-score-label"
              id="list-score-select"
              value={score || ""}
              label="Status"
              onChange={(event) => setScore(event.target.value as number)}
            >
              <MenuItem value={10}>{`10 - MASTERPIECE`}</MenuItem>
              <MenuItem value={9}>{`9 - GREAT`}</MenuItem>
              <MenuItem value={8}>{`8 - VERY GOOD`}</MenuItem>
              <MenuItem value={7}>{`7 - GOOD`}</MenuItem>
              <MenuItem value={6}>{`6 - FINE`}</MenuItem>
              <MenuItem value={5}>{`5 - AVERAGE`}</MenuItem>
              <MenuItem value={4}>{`4 - BAD`}</MenuItem>
              <MenuItem value={3}>{`3 - VERY BAD`}</MenuItem>
              <MenuItem value={2}>{`2 - HORRIBLE`}</MenuItem>
              <MenuItem value={1}>{`1 - APPALLING`}</MenuItem>
              <MenuItem value={0}>
                <em>{`None`}</em>
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleDialogSave}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
