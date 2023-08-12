"use client";

import NextLink from "next/link";
import Image from "next/image";
import Link from "@mui/material/Link";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getImageUrl } from "@/lib/igdb";
import { GameList } from "./GameList";

export default function GameRow({ list }: { list: GameList }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Image
          src={getImageUrl(
            list.game?.cover?.image_id || "",
            "cover_small",
            "2x"
          )}
          alt={`${list.game?.name} Cover`}
          width={45}
          height={68}
        />
      </TableCell>
      <TableCell>
        <Link
          color="#fff"
          component={NextLink}
          href={`/games/${list.game?.slug}`}
        >
          {`${list.game?.name}`}
        </Link>
      </TableCell>
      <TableCell>{list.status}</TableCell>
      <TableCell>{list.score}</TableCell>
    </TableRow>
  );
}
