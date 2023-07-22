"use server";

import { prisma } from "@/lib/db";
import { ListStatus } from "@prisma/client";

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

export async function updateList(
  userId: string,
  gameId: number,
  status: ListStatus | null | undefined,
  score: number | null | undefined
) {
  await prisma.list.upsert({
    where: { userId, gameId },
    update: { status, score },
    create: { userId, gameId, score, status },
  });
}
