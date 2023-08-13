import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

const include = {
  followers: { include: { followersUser: true } },
  following: { include: { followingUser: true } },
};

export default async function getProfile(username: string) {
  const userInClerkPromise = currentUser();
  const userInPrismaPromise = findUserByUsername(username);

  let [userInClerk, userInPrisma] = await Promise.all([
    userInClerkPromise,
    userInPrismaPromise,
  ]);

  if (!userInPrisma && userInClerk?.id) {
    userInPrisma = await findUserById(userInClerk.id);
  }

  if (!userInPrisma && userInClerk?.id && userInClerk.username) {
    const { id, username: usernameInClerk, imageUrl } = userInClerk;

    userInPrisma = await createCurrentUser(id, usernameInClerk, imageUrl);
  }

  if (
    userInPrisma?.id === userInClerk?.id &&
    userInPrisma?.username !== userInClerk?.username
  ) {
    userInPrisma = await updateCurrentUsername(
      userInClerk?.id || "",
      userInClerk?.username || ""
    );

    return redirect("/profile/" + userInClerk?.username?.toLowerCase());
  }

  if (userInPrisma?.username !== username) return notFound();

  return { currentUser: userInClerk, user: userInPrisma };
}

async function findUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: { username },
    include,
  });
}

async function findUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id: id },
    include,
  });
}

async function updateCurrentUsername(id: string, username: string) {
  return await prisma.user.update({
    where: { id: id },
    data: { username: username },
    include,
  });
}

async function createCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.create({
    data: { id, username, image },
    include,
  });
}
