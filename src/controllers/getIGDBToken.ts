import { cache } from "react";
import { prisma } from "@/lib/db";

/**
 * Retrieves the IGDB token from the Prisma database.
 * @returns A promise that resolves with the IGDB token.
 */
async function getIGDBToken() {
  const igdbToken = await prisma.iGDBToken.findMany();
  return igdbToken;
}

export default cache(getIGDBToken);
