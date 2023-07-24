import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/types/PageProps";
import getGamePageData, {
  getGamePageMetadata,
} from "@/layouts/Games/Server/getGamePageData";
import Game from "@/layouts/Games/Game";

type GamePageProps = PageProps<{ slug: string }>;

export async function generateMetadata(
  { params: { slug }, searchParams }: GamePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return await getGamePageMetadata(slug);
}

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const { session, games, gameListUser } = await getGamePageData(slug);

  return (
    <div>
      <Game session={session} game={games[0]} gameListUser={gameListUser} />
    </div>
  );
}
