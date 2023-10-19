import Game from "./Game";

type Website = {
  id: number;
  category?: number;
  trusted?: boolean;
  url?: string;
  game?: Game;
};

export default Website;
