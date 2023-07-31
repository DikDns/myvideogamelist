"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularLoading from "@/components/Loading/CircularLoading";
import { Game } from "@/types/Game";
import GameCard from "./components/GameCard";
import getSearchGames from "./server/getSearchGames";
import { h3 } from "../styles";

export default function Search() {
  const searchParam = useSearchParams();
  const search = searchParam.get("q");

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(true);
    setGames([]);
    setOffset(0);
  }, [search]);

  useEffect(() => {
    if (games.length > 0) return;
    fetchMore();
  });

  const fetchMore = async () => {
    const fetchLimit = 10;
    const nextGames = await getSearchGames(search, fetchLimit, offset);

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
  };

  return (
    <Container component="main" sx={{ my: 11 }}>
      <Typography variant="h3" sx={h3} mb={2}>
        {`Search result: ${search}`}
      </Typography>

      <InfiniteScroll
        dataLength={games.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
        endMessage={
          games.length === 0 ? (
            <Typography variant="h6" component="h2" textAlign="center">
              Not Found
            </Typography>
          ) : (
            ""
          )
        }
      >
        <Grid container gap={3}>
          {games.map((game, i) => (
            <Grid item key={i} xs={12}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
}
