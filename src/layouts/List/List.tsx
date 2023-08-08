"use client";

import Image from "next/image";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { getImageUrl } from "@/lib/igdb";
import { ListStatus } from "@prisma/client";

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

export default function List({ data }: { data: GameList[] }) {
  React.useEffect(() => {
    console.log(data);
  }, []);

  return (
    <Container>
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
              <TableCell align="right">Favorite</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Image
                  src={getImageUrl("", "cover_small", "2x")}
                  alt="P5R Cover"
                  width={45}
                  height={68}
                />
              </TableCell>
              <TableCell>{`Persona 5 Royal`}</TableCell>
              <TableCell align="right">{`😍`}</TableCell>
              <TableCell align="right">{`ON-HOLD`}</TableCell>
              <TableCell align="right">{`9`}</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Image
                  src={getImageUrl("", "cover_small", "2x")}
                  alt="P5R Cover"
                  width={45}
                  height={68}
                />
              </TableCell>
              <TableCell>{`Persona 5 Royal`}</TableCell>
              <TableCell align="right">{`😍`}</TableCell>
              <TableCell align="right">{`ON-HOLD`}</TableCell>
              <TableCell align="right">{`9`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
