"use server";

import { prisma } from "@/lib/db";

export async function updateIsFavorited(
  userId: string,
  gameId: number,
  isFavorited: boolean
) {
  await prisma.list.upsert({
    where: { userId, gameId },
    update: { isFavorited },
    create: { userId, gameId, isFavorited },
  });
}
