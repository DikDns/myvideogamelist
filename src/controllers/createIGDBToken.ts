import { prisma } from "@/lib/db";

export default async function createIGDBToken(
  accessToken: string,
  expiredAt: Date
): Promise<void> {
  const res = await prisma.iGDBToken.create({
    data: { accessToken, expiredAt },
  });
  if (!res) {
    throw new Error("Failed to store the new access token.");
  }
}
