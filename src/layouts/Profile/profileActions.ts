"use server";

import { prisma } from "@/lib/db";

export async function updateProfile(
  userId: string,
  bio: string,
  steamUsername: string
) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      bio,
      gameSocialNetwork: {
        upsert: { create: { steamUsername }, update: { steamUsername } },
      },
    },
  });
}
