import { prisma } from "@/lib/db";

export default async function updateIGDBToken(
  currentAccessToken: string,
  newAccessToken: string,
  expiredAt: Date
): Promise<void> {
  const res = await prisma.iGDBToken.update({
    where: { accessToken: currentAccessToken },
    data: { accessToken: newAccessToken, expiredAt },
  });
  if (!res) {
    throw new Error("Failed to update the access token.");
  }
}
