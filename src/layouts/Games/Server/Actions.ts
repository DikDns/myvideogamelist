"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function updateIsFavorited(
  userId: string,
  gameId: number,
  gameSlug: string,
  isFavorited: boolean
) {
  await prisma.list.upsert({
    where: { userId, gameId },
    update: { isFavorited },
    create: { userId, gameId, isFavorited },
  });

  revalidatePath(`/games/${gameSlug}`);
}
