import { cache } from "react";
import { prisma } from "@/lib/db";

export const getToken = cache(async () => await prisma.iGDBToken.findMany());

export const createToken = async (accessToken: string, expiredAt: Date) => {
  const res = await prisma.iGDBToken.create({
    data: { accessToken, expiredAt },
  });
  if (!res) {
    throw new Error("Failed to store the new access token.");
  }
};

export const updateToken = async (
  currentAccessToken: string,
  newAccessToken: string,
  expiredAt: Date
) => {
  const res = await prisma.iGDBToken.update({
    where: { accessToken: currentAccessToken },
    data: { accessToken: newAccessToken, expiredAt },
  });
  if (!res) {
    throw new Error("Failed to update the access token.");
  }
};
