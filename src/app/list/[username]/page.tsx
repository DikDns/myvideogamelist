import { currentUser } from "@clerk/nextjs";
import List from "@/layouts/List/List";
import { prisma } from "@/lib/db";
import { getGames } from "@/lib/igdb";
import { Game } from "@/types/Game";
import { ListStatus } from "@prisma/client";

export default async function ListUsernamePage() {
  const userInClerk = await currentUser();
  const userInPrisma = await prisma.user.findUnique({
    where: { id: userInClerk?.id },
    include: { gameLists: { orderBy: [{ status: "asc" }] } },
  });

  if (userInPrisma?.username !== userInClerk?.username) {
    await prisma.user.update({
      where: { id: userInClerk?.id },
      data: { username: userInClerk?.username },
    });
  }

  const games: Game[] = await getGames(
    `f name, cover.image_id, slug; w id=(${userInPrisma?.gameLists
      .map((game) => game.gameId)
      .join(",")});`
  );

  const gameListUser = [];

  for (let i = 0; i < games.length; i++) {
    gameListUser.push({
      game: {
        id: games[i].id || 0,
        slug: games[i].slug || "",
        name: games[i].name || "",
        imageId: games[i].cover?.image_id || "",
      },
      status: userInPrisma?.gameLists[i].status,
      score: userInPrisma?.gameLists[i].score,
      isFavorited: userInPrisma?.gameLists[i].isFavorited,
    });
  }

  // gameListUser.sort((a, b) => {
  //   if(a.s)
  // });

  return (
    <div>
      <List data={gameListUser} />
    </div>
  );
}
