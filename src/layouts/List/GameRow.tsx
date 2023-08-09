"use client";

import NextLink from "next/link";
import Image from "next/image";
import Link from "@mui/material/Link";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getImageUrl } from "@/lib/igdb";
import { GameList } from "./List";

export default function GameRow({ item }: { item: GameList }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <Image
          src={getImageUrl(item.game.imageId, "cover_small", "2x")}
          alt={`${item.game.name} Cover`}
          width={45}
          height={68}
        />
      </TableCell>
      <TableCell>
        <Link
          color="#fff"
          component={NextLink}
          href={`/games/${item.game.slug}`}
        >
          {`${item.game.name}`}
        </Link>
      </TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>{item.score}</TableCell>
    </TableRow>
  );
}
