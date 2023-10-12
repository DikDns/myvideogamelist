import Game from "@/features/games/types/Game";
import {
  ListStatus,
  GameList as prismaGameList,
  User as prismaUser,
} from "@prisma/client";

type GameList = {
  userId: string;
  gameId: number;
  game?: Game;
  status: ListStatus | null | undefined;
  score: number | null | undefined;
  isFavorited: boolean | null | undefined;
};

export type User = prismaUser & { gameList: prismaGameList[] };

export default GameList;
