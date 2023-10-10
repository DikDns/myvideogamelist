import Game from "@/features/games/types/Game";

type Series = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};

export default Series;
