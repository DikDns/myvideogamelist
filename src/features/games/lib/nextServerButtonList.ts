"use server";

import { prisma } from "@/lib/db";
import { ListStatus } from "@prisma/client";
import { auth } from "@clerk/nextjs";

export async function updateList(
  gameId: number,
  status: ListStatus | null | undefined,
  score: number | null | undefined
) {
  const { userId } = auth();

  if (!userId) throw new Error("User is not logged in");

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
