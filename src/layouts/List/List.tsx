"use client";

import NextLink from "next/link";
import Image from "next/image";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { getImageUrl } from "@/lib/igdb";
import { ListStatus } from "@prisma/client";
import { h3 } from "../styles";

type GameList = {
  game: {
    id: number;
    slug: string;
    name: string;
    imageId: string;
  };
  status: ListStatus | null | undefined;
  score: number | null | undefined;
  isFavorited: boolean | null | undefined;
};

export default function List({
  data,
  username,
}: {
  data: GameList[];
  username: string;
}) {
  return (
    <Container>
      <Typography mb={1} variant="h3" sx={h3}>
        <Link component={NextLink} href={`/profile/${username}`}>
          {`${username.toUpperCase()}`}
        </Link>
        {` Game List`}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="list games table"
          size="small"
        >
          <TableHead>
            <TableRow>
              <TableCell>Cover</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Score</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Image
                    src={getImageUrl(item.game.imageId, "cover_small", "2x")}
                    alt={`${item.game.name} Cover`}
                    width={45}
                    height={68}
                  />
                </TableCell>
                <TableCell>{`${item.game.name}`}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.score}</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
