import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export default async function currentUserProfile(username: string) {
  const userInClerkPromise = currentUser();
  const userInPrismaPromise = findUserByUsername(username);

  // eslint-disable-next-line prefer-const
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
    (userInPrisma?.username !== userInClerk?.username ||
      userInPrisma?.image !== userInClerk?.imageUrl)
  ) {
    if (!(userInClerk?.id && userInClerk.username && userInClerk.imageUrl)) {
      return notFound();
    }

    const { id, username: usernameInClerk, imageUrl } = userInClerk;

    await updateCurrentUser(id, usernameInClerk, imageUrl);

    return redirect("/profile/" + usernameInClerk.toLowerCase());
  }

  if (userInPrisma?.username !== username) return notFound();

  return { currentUser: userInClerk, user: userInPrisma };
}

const include = {
  followers: true,
  following: true,
  gameList: true,
  gameSocialNetwork: true,
};

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

async function updateCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.update({
    where: { id: id },
    data: { username, image },
    include,
  });
}

async function createCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.create({
    data: { id, username, image },
    include,
  });
}
