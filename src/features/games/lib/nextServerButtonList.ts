"use server";

import { prisma } from "@/lib/db";
import { ListStatus } from "@prisma/client";

export async function updateList(
  userId: string,
  gameId: number,
  status: ListStatus | null | undefined,
  score: number | null | undefined
) {
  await prisma.gameList.upsert({
    where: {
      gameId_userId: {
        gameId,
        userId,
      },
    },
    update: { status, score },
    create: { userId, gameId, score, status },
  });
}
