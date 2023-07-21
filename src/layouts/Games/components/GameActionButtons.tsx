"use client";

import { ListStatus } from "@prisma/client";
import { Game } from "@/types/Game";
import { GameListUser } from "../types/GameListUser";
import { Session } from "next-auth";
import {
  updateIsFavorited,
  updateScore,
  updateStatus,
} from "../Server/Actions";
import { useState, experimental_useOptimistic as useOptimistic } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Favorite from "@mui/icons-material/Favorite";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function GameActionButtons({
  game,
  gameListUser,
  session,
}: {
  game: Game;
  session: Session;
  gameListUser: GameListUser | null;
}) {
  /**
   * TODO ADD REMOVE FROM LIST
   */
  const [favoriteOptimistic, addFavoriteOptimistic] = useOptimistic(
    {
      isFavorited: gameListUser?.isFavorited,
      sending: false,
    },
    (state, newState: boolean) => ({
      ...state,
      isFavorited: newState,
      sending: true,
    })
  );

  const handleFavorite = async () => {
    addFavoriteOptimistic(!favoriteOptimistic.isFavorited);
    await updateIsFavorited(
      session.user.id,
      game.id,
      !favoriteOptimistic.isFavorited
    );
  };

  const [listOptimistic, addListOptimistic] = useOptimistic(
    {
      status: gameListUser?.status,
      score: gameListUser?.score,
      sending: false,
    },
    (state, newState: {}) => ({
      ...state,
      ...newState,
      sending: true,
    })
  );

  const [status, setStatus] = useState(listOptimistic.status);
  const [score, setScore] = useState(listOptimistic.score);

  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
    setStatus(listOptimistic.status || ListStatus.PLAYING);
    setScore(listOptimistic.score);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  const handleDialogSave = async () => {
    setOpen(false);

    addListOptimistic({ status, score });

    console.log(status);
    console.log(score);
    console.log(listOptimistic);

    if (status) {
      await updateStatus(session.user.id, game.id, status);
    }

    if (score) {
      await updateScore(session.user.id, game.id, score);
    }
  };

  return (
    <>
      <Box
        mt={2}
        mb={3}
        sx={{ display: "grid", gap: 2, gridTemplateColumns: "1fr 1fr" }}
      >
        <Button
          variant="outlined"
          color={favoriteOptimistic.isFavorited ? "secondary" : "inherit"}
          sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
          onClick={() => handleFavorite()}
        >
          <Favorite fontSize="small" />
          {`Favorite${favoriteOptimistic.isFavorited ? "d" : ""}`}
        </Button>

        <Button
          variant={listOptimistic.status ? "outlined" : "contained"}
          color={
            listOptimistic.status === "DROPPED"
              ? "error"
              : listOptimistic.status === "ONHOLD"
              ? "warning"
              : "primary"
          }
          onClick={() => handleDialogOpen()}
        >
          {listOptimistic.status ? `${listOptimistic.status}` : `Add to List`}
        </Button>
      </Box>

      <Dialog fullWidth open={open} onClose={handleDialogClose}>
        <DialogTitle>{game.name}</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id="list-status-label">Status</InputLabel>
            <Select
              labelId="list-status-label"
              id="list-status-select"
              value={status || ListStatus.PLAYING}
              label="Status"
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
              <MenuItem value="">
                <em>{`None`}</em>
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button color="secondary" onClick={handleDialogSave}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
