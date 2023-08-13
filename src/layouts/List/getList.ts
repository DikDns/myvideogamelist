import { notFound, redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import { Game } from "@/types/Game";
import { User, GameList } from "@prisma/client";

interface UserInPrisma extends User {
  gameLists: GameList[];
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
      gameLists: {
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
      gameLists: {
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
    include: { gameLists: true },
  });
}

async function createCurrentUser(id: string, username: string, image: string) {
  return await prisma.user.create({
    data: { id, username, image },
    include: { gameLists: true },
  });
}

function generateGameList(games: Game[], userInPrisma: UserInPrisma) {
  const userGameList = userInPrisma?.gameLists;
  const temp = [];

  for (let i = 0; i < userGameList.length; i++) {
    const currentGame = games.find(
      (game) => game.id === userGameList[i].gameId
    );
    temp.push({
      userId: userGameList[i].userId,
      gameId: userGameList[i].gameId,
      game: {
        id: currentGame?.id || 0,
        slug: currentGame?.slug || "",
        name: currentGame?.name || "",
        imageId: currentGame?.cover?.image_id || "",
      },
      status: userGameList[i].status,
      score: userGameList[i].score,
      isFavorited: userGameList[i].isFavorited,
    });
  }

  return temp;
}
