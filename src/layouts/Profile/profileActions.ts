"use server";

import { prisma } from "@/lib/db";

export async function updateBio(userId: string, bio: string) {
  await prisma.user.update({ where: { id: userId }, data: { bio } });
}
