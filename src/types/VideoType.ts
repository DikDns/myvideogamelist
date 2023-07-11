import { VideoGame } from "./VideoGameType";

export type Video = {
  id: number;
  video_id: string;
  name?: string;
  game?: VideoGame;
};
