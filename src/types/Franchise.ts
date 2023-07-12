import { Game } from "./Game";

export type Franchise = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};
