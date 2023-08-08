import { currentUser } from "@clerk/nextjs";
import List from "@/layouts/List/List";
import { prisma } from "@/lib/db";
import { getGames } from "@/lib/igdb";
import { Game } from "@/types/Game";
import { PageProps } from "@/types/PageProps";

type ListPageProps = PageProps<{ username: string }>;

export default async function ListUsernamePage({
  params: { username },
}: ListPageProps) {
  const userInClerk = await currentUser();
  let userInPrisma;

  if (username === userInClerk?.username) {
    userInPrisma = await prisma.user.findUnique({
      where: { id: userInClerk?.id },
      include: {
        gameLists: { orderBy: [{ status: "asc" }, { isFavorited: "desc" }] },
      },
    });

    if (userInPrisma?.username !== userInClerk?.username) {
      await prisma.user.update({
        where: { id: userInClerk?.id },
        data: { username: userInClerk?.username },
      });
    }
  } else {
    userInPrisma = await prisma.user.findUnique({
      where: { username },
      include: {
        gameLists: { orderBy: [{ status: "asc" }, { isFavorited: "desc" }] },
      },
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

  return (
    <div>
      <List data={gameListUser} />
    </div>
  );
}
