import { PageProps } from "@/types/PageProps";
import { getGameLayoutData } from "@/features/games/lib/nextServerGameLayout";
import GameLayout from "@/features/games/components/GameLayout";

type GamePageProps = PageProps<{ slug: string }>;

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const { game, userGameList } = await getGameLayoutData(slug);

  return (
    <div>
      <GameLayout game={game} userGameList={userGameList} />
    </div>
  );
}
