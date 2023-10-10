import Game from "@/features/games/types/Game";

type Franchise = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};

export default Franchise;
