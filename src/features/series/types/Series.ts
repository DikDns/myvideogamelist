import { Game } from "@/types/Game";

type Series = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};

export default Series;
