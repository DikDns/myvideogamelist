"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import MUIBox from "@mui/material/Box";
import MUITypography from "@mui/material/Typography";
import GameCard from "@/features/games/components/GameCard";
import CircularLoading from "@/layouts/CircularLoading";
import useSearchGames from "../hooks/useSearchGames";

const h3 = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

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

export default function SearchInfiniteLoad() {
  const { games, hasMore, fetchMore, search } = useSearchGames();

  return (
    <>
      <MUITypography variant="h3" sx={h3}>
        {`Search result: ${search}`}
      </MUITypography>

      <InfiniteScroll
        dataLength={games.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
        endMessage={
          games.length === 0 ? (
            <MUITypography variant="h6" component="h2" textAlign="center">
              Not Found
            </MUITypography>
          ) : (
            ""
          )
        }
      >
        <MUIBox sx={cardGameContainer}>
          {games.map((game, index) => {
            const key = `${game.id}_${game.slug}_${index}`;
            return <GameCard key={key} game={game} />;
          })}
        </MUIBox>
      </InfiniteScroll>
    </>
  );
}
