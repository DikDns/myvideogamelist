import { prisma } from "@/lib/db";

/**
 * Updates the IGDB token in the Prisma database.
 * @param currentAccessToken - The current access token to be updated.
 * @param newAccessToken - The new access token value.
 * @param expiredAt - The new expiration date of the access token.
 * @returns A promise that resolves when the token is successfully updated.
 * @throws An error if the token update fails.
 */
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
