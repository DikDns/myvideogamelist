import { Game } from "./Game";

export type Series = {
  id: number;
  name?: string;
  slug?: string;
  games?: Game[];
};
