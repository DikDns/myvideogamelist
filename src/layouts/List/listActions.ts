"use server";

import { prisma } from "@/lib/db";
import { ListStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateStatus(
  userId: string,
  gameId: number,
  status: ListStatus | null | undefined
) {
  await prisma.gameList.update({
    where: {
      gameId_userId: {
        gameId,
        userId,
      },
    },
    data: {
      status,
    },
  });
}

export async function updateScore(
  userId: string,
  gameId: number,
  score: number | null | undefined
) {
  await prisma.gameList.update({
    where: {
      gameId_userId: {
        gameId,
        userId,
      },
    },
    data: {
      score,
    },
  });
}

export async function deleteList(
  username: string,
  userId: string,
  gameId: number
) {
  await prisma.gameList.delete({
    where: {
      gameId_userId: {
        gameId,
        userId,
      },
    },
  });

  revalidatePath(`/list/${username.toLowerCase()}`);
}
