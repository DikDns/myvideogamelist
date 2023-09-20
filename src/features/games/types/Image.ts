import Game from "./Game";

type Image = {
  alpha_channel?: boolean;
  animated?: boolean;
  checksum?: string;
  game?: Game;
  height?: number;
  id: number;
  image_id?: string;
  url?: string;
  width: number;
};

export default Image;
