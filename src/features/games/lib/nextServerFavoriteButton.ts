"use server";

import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export async function updateIsFavorited(gameId: number, isFavorited: boolean) {
  const { userId } = auth();

  if (!userId) throw new Error("User is not logged in");

  await prisma.gameList.upsert({
    where: {
      gameId_userId: {
        gameId,
        userId,
      },
    },
    update: { isFavorited },
    create: { userId, gameId, isFavorited },
  });
}
