"use client";

import MUITableCell from "@mui/material/TableCell";
import MUITableRow from "@mui/material/TableRow";
import GameList from "../types/GameList";
import GameCover from "./GameCover";
import GameTitle from "./GameTitle";

export default function ListTableRowView({ list }: { list: GameList }) {
  const { game } = list;

  return (
    <MUITableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <MUITableCell component="th" scope="row">
        <GameCover imageId={game?.cover?.image_id} alt={game?.name} />
      </MUITableCell>
      <MUITableCell>
        <GameTitle name={game?.name} slug={game?.slug} />
      </MUITableCell>
      <MUITableCell>{list.status}</MUITableCell>
      <MUITableCell>{list.score}</MUITableCell>
    </MUITableRow>
  );
}
