"use client";

import { Game } from "@/types/Game";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import GameCard from "./components/GameCard";
import { getGames } from "@/lib/igdb";
import { SearchParams } from "@/types/SearchParams";

export default function Search({
  initGames,
  searchParams,
}: {
  initGames: Game[];
  searchParams: SearchParams;
}) {
  const [games, setGames] = useState(initGames);
  const [offset, setOffset] = useState(initGames.length);
  const [hasMore, setHasMore] = useState(true);

  const fetchMore = async () => {
    let body = `
    f name, slug, cover.image_id, aggregated_rating, genres.name;
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l 10;
    o ${offset};
  `;

    if (searchParams.q && searchParams.q.length > 1) {
      body = `search "${searchParams.q}"; f name, aggregated_rating, category, slug, cover.image_id, genres.name, cover.image_id; l 10; o ${offset};`;
    }

    const nextGames: Game[] = await getGames(body);
    nextGames.sort((a, b) => (a.category || 0) - (b.category || 0));

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
  };

  return (
    <Container component="main" sx={{ my: 11 }}>
      {initGames.length > 0 ? (
        <InfiniteScroll
          dataLength={games.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={hasMore}
          loader={<Loading />}
        >
          <Grid container gap={3}>
            {games.map((game, i) => (
              <Grid item key={i} xs={12}>
                <GameCard game={game} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <Typography variant="h6" component="h2" textAlign="center">
          Not Found
        </Typography>
      )}
    </Container>
  );
}

function Loading() {
  return (
    <Grid
      overflow="hidden"
      container
      py={2}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
}
