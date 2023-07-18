import { Game } from "./Game";

export type Website = {
  id: number;
  category?: number;
  trusted?: boolean;
  url?: string;
  game?: Game;
};
