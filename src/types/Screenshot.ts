import { VideoGame } from "./VideoGameType";

export type Screenshot = {
  alpha_channel?: boolean;
  animated?: boolean;
  checksum?: string;
  game?: VideoGame;
  height?: number;
  id: number;
  image_id?: string;
  url?: string;
  width: number;
};
