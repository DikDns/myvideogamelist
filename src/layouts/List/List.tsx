"use client";

import NextLink from "next/link";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
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
import { ListStatus, User } from "@prisma/client";
import { h3 } from "../styles";
import GameRow from "./GameRow";

export default function List({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <Typography mb={2} variant="h3" sx={h3}>
        <Link
          color="#fff"
          component={NextLink}
          href={`/profile/${user.username}`}
        >
          {`${user.username?.toLowerCase()}`}
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
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {data.map((item, index) => (
              <GameRow key={index} item={item} />
            ))}
            {data.length === 0 && (
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  <Typography variant="subtitle1">No Data</Typography>
                </TableCell>
              </TableRow>
            )} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
