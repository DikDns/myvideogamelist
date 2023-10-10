"use client";

import MUIBox from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import GameCard from "@/features/games/components/GameCard";
import Game from "@/features/games/types/Game";

const gameCardContainer: SxProps = {
  mt: 3,
  display: "grid",
  columnGap: { md: 6, xs: 3 },
  rowGap: { md: 4, xs: 2 },
  gridTemplateColumns: {
    sm: "1fr 1fr",
    xs: "1fr",
  },
};

export default function FranchiseDetailGames({ games }: { games: Game[] }) {
  return (
    <MUIBox sx={gameCardContainer}>
      {games.map((game, i) => {
        const key = `game_${game.slug}_${i}`;
        return <GameCard key={key} game={game} />;
      })}
    </MUIBox>
  );
}
