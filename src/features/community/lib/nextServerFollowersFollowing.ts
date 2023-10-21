"use server";
import { prisma } from "@/lib/db";
import { currentUser as clerkCurrentUser } from "@clerk/nextjs";

export async function getFollowersFollowing() {
  const currentUser = await clerkCurrentUser();

  const currentUserFollowers = await prisma.follows.findMany({
    where: { followingUser: { id: currentUser?.id } },
    include: {
      followingUser: { select: { id: true, username: true, image: true } },
    },
  });

  const currentUserFollowing = await prisma.follows.findMany({
    where: { followersUser: { id: currentUser?.id } },
    include: {
      followersUser: { select: { id: true, username: true, image: true } },
    },
  });

  return {
    currentUserFollowers,
    currentUserFollowing,
  };
}
