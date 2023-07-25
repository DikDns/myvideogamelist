"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import GameCard from "../Search/components/GameCard";
import CircularLoading from "@/components/Loading/CircularLoading";
import { Game } from "@/types/Game";
import { getTopNewReleaseGames } from "@/lib/igdb";

const brackets = {
  topRated: "top-rated",
  topNewReleases: "top-new-releases",
  topUpcoming: "top-upcoming",
  newReleases: "new-releases",
};

export function BracketSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="bracket-select-label">Bracket</InputLabel>
        <Select
          labelId="bracket-select-label"
          id="bracket-select"
          value={value}
          label="Bracket"
          onChange={onChange}
        >
          <MenuItem value={brackets.topRated}>Top Rated</MenuItem>
          <MenuItem value={brackets.topNewReleases}>Top New Releases</MenuItem>
          <MenuItem value={brackets.topUpcoming}>Top Upcoming</MenuItem>
          <MenuItem value={brackets.newReleases}>New Releases</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function Games() {
  const [bracket, setBracket] = useState(brackets.topNewReleases);

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
      <BracketSelect
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
