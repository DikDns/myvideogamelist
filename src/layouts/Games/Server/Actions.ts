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

export async function updateStatus(
  userId: string,
  gameId: number,
  status: ListStatus
) {
  await prisma.list.upsert({
    where: { userId, gameId },
    update: { status },
    create: { userId, gameId, status },
  });
}

export async function updateScore(
  userId: string,
  gameId: number,
  score: number
) {
  await prisma.list.upsert({
    where: { userId, gameId },
    update: { score },
    create: { userId, gameId, score },
  });
}
