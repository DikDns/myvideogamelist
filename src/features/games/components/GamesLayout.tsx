"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import MUIContainer from "@mui/material/Container";
import MUIBox from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import CircularLoading from "@/layouts/CircularLoading";
import GameCard from "./GameCard";
import GamesBracketSelect from "./GamesBracketSelect";
import useGamesBracket from "../hooks/useGamesBracket";

const cardGameContainer = {
  mt: 3,
  display: "grid",
  columnGap: { md: 6, xs: 3 },
  rowGap: { md: 4, xs: 2 },
  gridTemplateColumns: {
    sm: "1fr 1fr",
    xs: "1fr",
  },
};

export default function GamesLayout() {
  const { games, hasMore, fetchMore, bracket, setBracket } = useGamesBracket();

  return (
    <MUIContainer>
      <Breadcrumbs />

      <GamesBracketSelect
        value={bracket}
        onChange={(event: SelectChangeEvent) => setBracket(event.target.value)}
      />

      <InfiniteScroll
        dataLength={games.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
      >
        <MUIBox sx={cardGameContainer}>
          {games.map((game, index) => {
            const key = `${game.id}_${index}`;
            return <GameCard key={key} game={game} />;
          })}
        </MUIBox>
      </InfiniteScroll>
    </MUIContainer>
  );
}
