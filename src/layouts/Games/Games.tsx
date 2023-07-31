"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { SelectChangeEvent } from "@mui/material/Select";
import GameCard from "../Search/components/GameCard";
import CircularLoading from "@/components/Loading/CircularLoading";
import { Game } from "@/types/Game";
import { getTopNewReleaseGames } from "@/lib/igdb";
import GamesBracketSelect, { brackets } from "./components/GamesBracketSelect";

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
  const [bracket, setBracket] = useState(
    validateBracketParams(searchParams.get("bracket"))
  );

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    console.log(games);
  }, [games]);

  useEffect(() => {
    fetchMore();
  }, [bracket]);

  const fetchMore = async () => {
    const nextGames: Game[] = await getTopNewReleaseGames(10, offset);

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
