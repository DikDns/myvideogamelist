import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { PageProps } from "@/types/PagePropsType";
import { VideoGame } from "@/types/VideoGameType";
import { getGames } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import Game from "@/layouts/Games/Game";

type GamePageProps = PageProps<{ slug: string }>;

export async function generateMetadata(
  { params, searchParams }: GamePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const body = `f name; w slug="${slug}";`;
  const games: VideoGame[] = await getGames(body);

  if (games.length < 1) notFound();

  return {
    title: `${truncStr(games[0].name || "", 20)} | MVGL`,
  };
}

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const data = await getGames(`f *; w slug="${slug}";`);

  return (
    <div>
      <Game data={data} />
    </div>
  );
}
