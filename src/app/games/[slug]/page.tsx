import { PageProps } from "@/types/PageProps";
import getGamePageData from "@/layouts/Games/Server/getGamePageData";
import Game from "@/layouts/Games/Game";

type GamePageProps = PageProps<{ slug: string }>;

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const { games, userGameList } = await getGamePageData(slug);

  return (
    <div>
      <Game game={games[0]} userGameList={userGameList} />
    </div>
  );
}
