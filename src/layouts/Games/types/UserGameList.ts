import { ListType } from "@prisma/client";

export type UserGameList = { isFavorited: boolean; listType: ListType };
