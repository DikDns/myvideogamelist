"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SelectChangeEvent } from "@mui/material/Select";
import CircularLoading from "@/components/Loading/CircularLoading";
import { Game } from "@/types/Game";
import GamesBracketSelect, { brackets } from "./components/GamesBracketSelect";
import getGamesBracket from "./Server/getGamesBracket";
import GameCard from "../Search/components/GameCard";

function validateBracketParams(param: string | null) {
  return param === brackets.topRated ||
    param === brackets.topNewReleases ||
    param === brackets.topUpcoming ||
    param === brackets.newReleases
    ? param
    : brackets.topNewReleases;
}

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

    nextGames.sort((a, b) => (a.category || 0) - (b.category || 0));

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
  };

  return (
    <Container>
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
        <Grid container gap={3} mt={3}>
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
