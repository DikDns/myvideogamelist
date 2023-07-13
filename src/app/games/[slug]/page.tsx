import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { PageProps } from "@/types/PageProps";
import { Game } from "@/types/Game";
import { getCompanies, getGames } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import GameComponent from "@/layouts/Games/Game";

type GamePageProps = PageProps<{ slug: string }>;

export async function generateMetadata(
  { params, searchParams }: GamePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const body = `f name; w slug="${slug}";`;
  const games: Game[] = await getGames(body);

  if (games.length < 1) notFound();

  return {
    title: `${truncStr(games[0].name || "", 20)} | MVGL`,
  };
}

export default async function GamePage({ params: { slug } }: GamePageProps) {
  const body = `
    f *, age_ratings.rating, cover.image_id, screenshots.image_id,
    genres.*, themes.*, platforms.*;
    w slug="${slug}";
  `;
  const games: Game[] = await getGames(body);

  return (
    <div>
      <GameComponent game={games[0]} />
    </div>
  );
}
