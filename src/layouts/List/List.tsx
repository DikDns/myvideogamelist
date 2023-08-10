"use client";

import NextLink from "next/link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ListStatus } from "@prisma/client";
import { useUser } from "@clerk/nextjs";
import { h3 } from "../styles";
import GameRowControl from "./GameRowControl";
import GameRow from "./GameRow";

export type GameList = {
  userId: string;
  gameId: number;
  game?: {
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
  const { user } = useUser();

  return (
    <Container>
      <Typography mb={2} variant="h3" sx={h3}>
        <Link color="#fff" component={NextLink} href={`/profile/${username}`}>
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
              {user?.username === username && (
                <TableCell align="right">Action</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) =>
              user?.username === username ? (
                <GameRowControl key={index} item={item} />
              ) : (
                <GameRow key={index} item={item} />
              )
            )}
            {data.length === 0 && (
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={user?.username === username ? 5 : 4}
                >
                  <Typography variant="subtitle1">No Data</Typography>
                  {user?.username === username && (
                    <Button LinkComponent={NextLink} href={`/games`}>
                      Find your favorite games!
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
