import { prisma } from "@/lib/db";

/**
 * Creates a new IGDB token in the Prisma database.
 * @param accessToken - The access token to be stored.
 * @param expiredAt - The expiration date of the access token.
 * @returns A promise that resolves when the token is successfully created.
 * @throws An error if the token creation fails.
 */
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
