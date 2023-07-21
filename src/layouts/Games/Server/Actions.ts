"use server";

import { prisma } from "@/lib/db";
import { List } from "@prisma/client";

export async function upsertGameListUser(data: List) {
  const res = await prisma.list.upsert({
    where: { userId: data.userId, gameId: data.gameId },
    update: data,
    create: data,
  });

  return res;
}
