"use client";

import { useState, useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";

import MUITableCell from "@mui/material/TableCell";
import Game from "@/features/games/types/Game";
import { deleteList } from "../lib/nextServerList";

export default function FormDelete({
  game,
  setIsDeleted,
}: {
  game?: Game;
  setIsDeleted: (isDeleted: boolean) => void;
}) {
  const { user } = useUser();

  const [isOpen, setOpenDialog] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransitionDelete] = useTransition();

  const handleDelete = () => {
    if (!user) return;
    if (!user.id) return;
    if (!game) return;

    setIsDeleted(true);
    setOpenDialog(false);
    startTransitionDelete(() => deleteList(user.id, game.id));
  };

  return (
    <>
      <MUITableCell align="right">
        <IconButton
          color="error"
          aria-label="delete"
          onClick={() => setOpenDialog(true)}
        >
          <DeleteIcon />
        </IconButton>
      </MUITableCell>
      <Dialog
        open={isOpen}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Remove ${game?.name} from ${user?.username} list?`}
        </DialogTitle>
        <DialogActions>
          <Button color="inherit" onClick={() => setOpenDialog(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
