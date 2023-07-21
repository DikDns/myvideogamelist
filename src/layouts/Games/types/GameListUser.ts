import { ListStatus } from "@prisma/client";

export type GameListUser = {
  isFavorited: boolean | null;
  status: ListStatus | null;
  score: number | null;
};
