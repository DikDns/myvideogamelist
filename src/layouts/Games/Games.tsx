"use client";

import { useSearchParams, useRouter } from "next/navigation";
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
import { cardGameContainer } from "../styles";

function validateBracketParams(param: string | null) {
  return param === brackets.topRated ||
    param === brackets.topNewReleases ||
    param === brackets.topUpcoming ||
    param === brackets.newReleases
    ? param
    : brackets.topNewReleases;
}

export default function Games() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bracketParams = validateBracketParams(searchParams.get("bracket"));
  const [bracket, setBracket] = useState(bracketParams);

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOffset(0);
    setGames([]);
    setHasMore(false);
    setIsLoading(false);
    router.push(`/games?bracket=${bracket}`);
  }, [bracket]);

  useEffect(() => {
    if (isLoading) return;
    if (games.length > 0) return;
    fetchMore();
  }, [games]);

  const fetchMore = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const nextGames: Game[] = await getGamesBracket(
      bracket,
      offset,
      fetchLimit
    );

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
    setHasMore(true);
    setIsLoading(false);
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
