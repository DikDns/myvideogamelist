"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularLoading from "@/components/Loading/CircularLoading";
import CardGame from "@/components/Game/CardGame";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { Game } from "@/types/Game";
import getSearchGames from "./server/getSearchGames";
import { cardGameContainer, h3 } from "../styles";

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

      <Typography variant="h3" sx={h3}>
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
        <Box sx={cardGameContainer}>
          {games.map((game, i) => (
            <CardGame key={i} game={game} />
          ))}
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
