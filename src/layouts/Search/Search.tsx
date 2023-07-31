"use client";

import { Game } from "@/types/Game";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularLoading from "@/components/Loading/CircularLoading";
import GameCard from "./components/GameCard";
import { getGames } from "@/lib/igdb";
import { SearchParams } from "@/types/SearchParams";
import { h3 } from "../styles";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParam = useSearchParams();
  const search = searchParam.get("q");

  const [games, setGames] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setHasMore(true);
    setGames([]);
    setOffset(0);
  }, [search]);

  const fetchMore = async () => {
    let body = `
    f name, slug, cover.image_id, aggregated_rating, genres.name;
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l 10;
    o ${offset};
  `;

    if (search && search.length > 1) {
      body = `search "${search}"; f name, aggregated_rating, category, slug, cover.image_id, genres.name, cover.image_id; l 10; o ${offset};`;
    }

    const nextGames: Game[] = await getGames(body);
    nextGames.sort((a, b) => (a.category || 0) - (b.category || 0));

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
  };

  return (
    <Container component="main" sx={{ my: 11 }}>
      <Typography variant="h3" sx={h3} mb={2}>
        {`Search result: ${searchParams.q}`}
      </Typography>

      {initGames.length > 0 ? (
        <InfiniteScroll
          dataLength={games.length} //This is important field to render the next data
          next={fetchMore}
          hasMore={hasMore}
          loader={<CircularLoading />}
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
