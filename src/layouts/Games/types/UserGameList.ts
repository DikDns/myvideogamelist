import { ListStatus } from "@prisma/client";

export type UserGameList = { isFavorited: boolean; status: ListStatus };
