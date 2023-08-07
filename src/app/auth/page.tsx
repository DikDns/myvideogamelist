import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export default async function AuthPage() {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const { username, imageUrl } = await clerkClient.users.getUser(userId);

  const user = { id: userId, username, image: imageUrl };

  const res = await prisma.user.upsert({
    where: { id: userId },
    update: user,
    create: user,
  });

  return redirect("/");
}
