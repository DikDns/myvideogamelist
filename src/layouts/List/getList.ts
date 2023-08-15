import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { Game } from "@/types/Game";
import { User, GameList } from "@prisma/client";

interface UserInPrisma extends User {
  gameList: GameList[];
}

export default async function getList(username: string) {
  const userInClerk = await currentUser();
  let userInPrisma = await findUserByUsername(username);

  if (!userInPrisma && userInClerk?.id) {
    userInPrisma = await findUserById(userInClerk?.id);
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

    userInPrisma = await updateCurrentUser(id, usernameInClerk, imageUrl);

    return redirect("/list/" + usernameInClerk.toLowerCase());
  }

  if (userInPrisma?.username !== username) return notFound();

  return userInPrisma;
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
