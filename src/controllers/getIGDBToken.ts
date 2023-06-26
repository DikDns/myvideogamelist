import { cache } from "react";
import { prisma } from "@/lib/db";

async function getIGDBToken() {
  const igdbToken = await prisma.iGDBToken.findMany();
  return igdbToken;
}

export default cache(getIGDBToken);
