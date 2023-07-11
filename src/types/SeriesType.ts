import { VideoGame } from "./VideoGameType";

export type Series = {
  id: number;
  name?: string;
  slug?: string;
  games?: VideoGame[];
};
