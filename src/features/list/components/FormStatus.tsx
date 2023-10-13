"use client";

import { useState, useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import MUISelect, { SelectChangeEvent } from "@mui/material/Select";
import MUIFormControl from "@mui/material/FormControl";
import MUIInputLabel from "@mui/material/InputLabel";
import MUIMenuItem from "@mui/material/MenuItem";
import { ListStatus } from "@prisma/client";
import { updateStatus } from "../lib/nextServerList";
import GameList from "../types/GameList";

export default function FormStatus({ list }: { list: GameList }) {
  const { user } = useUser();
  const [status, setStatus] = useState(list.status as ListStatus);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransitionStatus] = useTransition();

  const handleStatusChange = (event: SelectChangeEvent<ListStatus>) => {
    if (!user) return;
    if (!user.id) return;

    const status = event.target.value as ListStatus;

    setStatus(status);
    startTransitionStatus(() => updateStatus(user.id, list.gameId, status));
  };

  return (
    <MUIFormControl fullWidth>
      <MUIInputLabel id="list-status-label">Status</MUIInputLabel>
      <MUISelect
        labelId="list-status-label"
        id="list-status-select"
        label="Status"
        value={status}
        onChange={handleStatusChange}
      >
        <MUIMenuItem value={ListStatus.PLAYING}>PLAYING</MUIMenuItem>
        <MUIMenuItem value={ListStatus.COMPLETED}>COMPLETED</MUIMenuItem>
        <MUIMenuItem value={ListStatus.WISHTOPLAY}>WISHTOPLAY</MUIMenuItem>
        <MUIMenuItem value={ListStatus.ONHOLD}>ONHOLD</MUIMenuItem>
        <MUIMenuItem value={ListStatus.DROPPED}>DROPPED</MUIMenuItem>
      </MUISelect>
    </MUIFormControl>
  );
}
