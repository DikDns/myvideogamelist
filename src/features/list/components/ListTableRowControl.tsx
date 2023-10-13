"use client";

import { useState } from "react";
import MUITableCell from "@mui/material/TableCell";
import MUITableRow from "@mui/material/TableRow";
import GameList from "../types/GameList";
import GameCover from "./GameCover";
import GameTitle from "./GameTitle";
import FormStatus from "./FormStatus";
import FormScore from "./FormScore";
import FormDelete from "./FormDelete";

export default function ListTableRowControl({ list }: { list: GameList }) {
  const { game } = list;
  const [isDeleted, setIsDeleted] = useState(false);

  return (
    <MUITableRow
      sx={{
        display: isDeleted ? "none" : "table-row",
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <MUITableCell component="th" scope="row">
        <GameCover imageId={game?.cover?.image_id} alt={game?.name} />
      </MUITableCell>

      <MUITableCell>
        <GameTitle name={game?.name} slug={game?.slug} />
      </MUITableCell>

      <MUITableCell>
        <FormStatus list={list} />
      </MUITableCell>

      <MUITableCell>
        <FormScore list={list} />
      </MUITableCell>

      <FormDelete game={game} setIsDeleted={setIsDeleted} />
    </MUITableRow>
  );
}
