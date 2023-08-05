import { PageProps } from "@/types/PageProps";
import getGamePageData from "@/layouts/Games/Server/getGamePageData";
import Game from "@/layouts/Games/Game";

type GamePageProps = PageProps<{ slug: string }>;

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const { session, games, gameListUser } = await getGamePageData(slug);

  return (
    <div>
      <Game session={session} game={games[0]} gameListUser={gameListUser} />
    </div>
  );
}
