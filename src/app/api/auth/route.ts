import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.redirect("/");
  }

  const { username, imageUrl } = await clerkClient.users.getUser(userId);

  const user = { id: userId, username, imageUrl };

  const res = await prisma.user.upsert({
    where: { id: userId },
    update: user,
    create: user,
  });

  console.log(res);

  return NextResponse.redirect("/");
}
