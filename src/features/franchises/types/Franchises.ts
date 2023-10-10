import Game from "@/features/games/types/Game";

type Franchises = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};

export default Franchises;
