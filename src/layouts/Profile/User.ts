import {
  User as PrismaUser,
  Follows as PrismaFollows,
  GameList as PrismaGameList,
} from "@prisma/client";

export type Followers = PrismaFollows & { followersUser: PrismaUser };
export type Following = PrismaFollows & { followingUser: PrismaUser };

export type User = PrismaUser & {
  followers: Followers[];
  following: Following[];
} & { gameLists: PrismaGameList[] };
