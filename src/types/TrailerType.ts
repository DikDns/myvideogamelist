import { VideoGame } from "./VideoGameType";

export type Trailer = {
  id: number;
  video_id: string;
  name?: string;
  game?: VideoGame;
};
