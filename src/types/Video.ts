import { Game } from "./Game";

export type Video = {
  id: number;
  video_id: string;
  name?: string;
  game?: Game;
};
