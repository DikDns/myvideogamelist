"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { SelectChangeEvent } from "@mui/material/Select";
import CircularLoading from "@/components/Loading/CircularLoading";
import { Game } from "@/types/Game";
import CardGame from "@/components/Game/CardGame";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import GamesBracketSelect, { brackets } from "./components/GamesBracketSelect";
import getGamesBracket from "./Server/getGamesBracket";

function validateBracketParams(param: string | null) {
  return param === brackets.topRated ||
    param === brackets.topNewReleases ||
    param === brackets.topUpcoming ||
    param === brackets.newReleases
    ? param
    : brackets.topNewReleases;
}

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

export default function Games() {
  const searchParams = useSearchParams();
  const bracketParams = validateBracketParams(searchParams.get("bracket"));
  const [bracket, setBracket] = useState(bracketParams);

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setOffset(0);
    setGames([]);
  }, [bracket]);

  useEffect(() => {
    if (games.length > 0) return;
    fetchMore();
  }, [games]);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const nextGames: Game[] = await getGamesBracket(
      bracket,
      offset,
      fetchLimit
    );

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
  };

  return (
    <Container>
      <Box sx={{ mb: { sm: 3, xs: 2 } }}>
        <BasicBreadcrumbs />
      </Box>
      <GamesBracketSelect
        value={bracket}
        onChange={(event: SelectChangeEvent) =>
          setBracket(event.target.value as string)
        }
      />
      <InfiniteScroll
        dataLength={games.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
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
