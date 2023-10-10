"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIBox from "@mui/material/Box";
import MUITypography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import { SxProps } from "@mui/material/styles";
import { HomeDataContext } from "./HomeLayout";
import GameGridColumn from "./GameGridColumn";

const h4: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "1.5rem",
    md: "2rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GamesGrid() {
  const data = useContext(HomeDataContext);
  const { popularUpcomingGames, topRatedGames, newReleaseGames } = data;

  return (
    <MUIBox
      sx={{
        display: "grid",
        columnGap: 4,
        rowGap: 2,
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr" },
      }}
    >
      {/* POPULAR UPCOMING */}
      <MUIBox>
        <MUITypography sx={h4} variant="h4" mt={5}>
          <MUILink component={NextLink} href="/games?bracket=top-upcoming">
            {"Popular Upcoming"}
          </MUILink>
        </MUITypography>
      </MUIBox>

      <GameGridColumn rowIndex={2} col={1} data={popularUpcomingGames} />

      {/* TOP RATED */}
      <MUIBox sx={{ gridArea: { md: "1 / 2 / 2 / 3" } }}>
        <MUITypography sx={h4} variant="h4" mt={5}>
          <MUILink component={NextLink} href="/games?bracket=top-rated">
            {"Top Rated"}
          </MUILink>
        </MUITypography>
      </MUIBox>

      <GameGridColumn type="rated" rowIndex={2} col={2} data={topRatedGames} />

      {/* NEW RELEASES */}
      <MUIBox sx={{ gridArea: { md: "1 / 3 / 2 / 4" } }}>
        <MUITypography sx={h4} variant="h4" mt={5}>
          <MUILink component={NextLink} href="/games?bracket=new-releases">
            {"New Releases"}
          </MUILink>
        </MUITypography>
      </MUIBox>

      <GameGridColumn
        type="upcoming"
        rowIndex={2}
        col={3}
        data={newReleaseGames}
      />
    </MUIBox>
  );
}
