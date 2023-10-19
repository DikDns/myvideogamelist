import Game from "@/features/games/types/Game";

type Video = {
  id: number;
  video_id: string;
  name?: string;
  game?: Game;
};

export default Video;
