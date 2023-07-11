import { VideoGame } from "./VideoGameType";

export type Franchise = {
  id: number;
  name?: string;
  slug?: string;
  games?: VideoGame[];
};
