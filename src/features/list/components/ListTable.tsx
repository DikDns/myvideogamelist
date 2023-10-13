"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUITable from "@mui/material/Table";
import MUITableBody from "@mui/material/TableBody";
import MUITableCell from "@mui/material/TableCell";
import MUITableContainer from "@mui/material/TableContainer";
import MUITableHead from "@mui/material/TableHead";
import MUITableRow from "@mui/material/TableRow";
import MUIPaper from "@mui/material/Paper";
import MUIButton from "@mui/material/Button";
import MUICircularProgress from "@mui/material/CircularProgress";
import MUITypography from "@mui/material/Typography";
import { UserContext } from "./UserProvider";
import ListTableRowView from "./ListTableRowView";
import ListTableRowControl from "./ListTableRowControl";
import useGameList from "../hooks/useGameList";

export default function ListTable() {
  const user = useContext(UserContext);
  const { gameList, isLoading, hasMore, fetchMore } = useGameList(user);

  return (
    <MUITableContainer component={MUIPaper}>
      <MUITable
        sx={{ minWidth: 650 }}
        aria-label="list games table"
        size="small"
      >
        <MUITableHead>
          <MUITableRow>
            <MUITableCell>Cover</MUITableCell>
            <MUITableCell>Name</MUITableCell>
            <MUITableCell>Status</MUITableCell>
            <MUITableCell>Score</MUITableCell>
            {user?.isCurrentUserList && (
              <MUITableCell align="right">Action</MUITableCell>
            )}
          </MUITableRow>
        </MUITableHead>
        <MUITableBody>
          {gameList.map((list, index) => {
            const key = `${list.gameId}_${index}`;
            return user?.isCurrentUserList ? (
              <ListTableRowControl key={key} list={list} />
            ) : (
              <ListTableRowView key={key} list={list} />
            );
          })}

          {isLoading && (
            <MUITableRow>
              <MUITableCell align="center" colSpan={5}>
                <MUICircularProgress />
              </MUITableCell>
            </MUITableRow>
          )}

          {hasMore && (
            <MUITableRow>
              <MUITableCell align="center" colSpan={5}>
                <MUIButton
                  disabled={isLoading}
                  onClick={() => fetchMore()}
                  variant="contained"
                >
                  Load More
                </MUIButton>
              </MUITableCell>
            </MUITableRow>
          )}

          {user?.gameList.length === 0 && (
            <MUITableRow>
              <MUITableCell align="center" colSpan={4}>
                <MUITypography variant="subtitle1">No Data</MUITypography>

                {user?.isCurrentUserList && (
                  <MUIButton LinkComponent={NextLink} href={"/games"}>
                    Find your favorite games!
                  </MUIButton>
                )}
              </MUITableCell>
            </MUITableRow>
          )}
        </MUITableBody>
      </MUITable>
    </MUITableContainer>
  );
}
