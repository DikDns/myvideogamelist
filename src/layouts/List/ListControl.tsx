"use client";

import NextLink from "next/link";
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
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import GameRowControl from "./GameRowControl";
import useGameList from "./useGameList";
import { h3 } from "../styles";
import { User } from "./GameList";

export default function List({ user }: { user: User }) {
  const { gameList, hasMore, isLoading, fetchMore } = useGameList(user);

  return (
    <Container>
      <Typography mb={2} variant="h3" sx={h3}>
        <Link
          color="#fff"
          component={NextLink}
          href={`/profile/${user.username}`}
        >
          {`${user.username?.toUpperCase()}`}
        </Link>
        {` List`}
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
            {gameList.map((list) => (
              <GameRowControl key={list.gameId} list={list} />
            ))}
            {isLoading && (
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
            {hasMore && (
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <Button
                    disabled={isLoading}
                    onClick={() => fetchMore()}
                    variant="contained"
                  >
                    Load More
                  </Button>
                </TableCell>
              </TableRow>
            )}
            {user.gameLists.length === 0 && (
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <Typography variant="subtitle1">No Data</Typography>
                  <Button LinkComponent={NextLink} href={`/games`}>
                    Find your favorite games!
                  </Button>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
