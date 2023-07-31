"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularLoading from "@/components/Loading/CircularLoading";
import CardGame from "@/components/Game/CardGame";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { Game } from "@/types/Game";
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
  }, [searchParam]);

  useEffect(() => {
    if (games.length > 0) return;
    fetchMore();
  }, [games]);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const nextGames = await getSearchGames(search, fetchLimit, offset);

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset((prevOffset) => prevOffset + nextGames.length);
  };

  return (
    <Container component="main">
      <Box mb={2}>
        <BasicBreadcrumbs />
      </Box>

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
        <Grid container gap={3} mb={4}>
          {games.map((game, i) => (
            <Grid item key={i} xs={12}>
              <CardGame game={game} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
}
