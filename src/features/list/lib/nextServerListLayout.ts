"use server";

import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

/**
 * Retrieves the current user's list based on their username.
 * If the user is not found in the database, it will attempt to find them in the authentication service.
 * If the user is still not found, it will create a new user in the database.
 * If the user's information has changed, it will update their information in the database.
 * @param username The username of the user whose list is being retrieved.
 * @returns The user's list if found, otherwise a not found response.
 */
export async function currentUserList(username: string) {
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

    return redirect("/list/" + usernameInClerk.toLowerCase());
  }

  if (userInPrisma?.username !== username) return notFound();

  return { currentUser: userInClerk, user: userInPrisma };
}

async function findUserByUsername(username: string) {
  return await prisma.user.findUnique({
    where: { username },
    include: {
      gameList: {
        orderBy: [
          { status: "asc" },
          { isFavorited: "desc" },
          { score: "desc" },
        ],
      },
    },
  });
}

async function findUserById(id: string) {
  return await prisma.user.findUnique({
    where: { id: id },
    include: {
      gameList: {
        orderBy: [
          { status: "asc" },
          { isFavorited: "desc" },
          { score: "desc" },
        ],
      },
    },
  });
}

async function updateCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.update({
    where: { id: id },
    data: { username, image },
    include: { gameList: true },
  });
}

async function createCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.create({
    data: { id, username, image },
    include: { gameList: true },
  });
}
