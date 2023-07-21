import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { PageProps } from "@/types/PageProps";
import { Game } from "@/types/Game";
import { getGames } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import GameComponent from "@/layouts/Games/Game";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";

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
  const sessionPromise = getServerSession(authOptions);
  const body = `
    f name, summary, first_release_date,
    genres.name, platforms.abbreviation, 
    screenshots.image_id, artworks.image_id, videos.video_id, 
    age_ratings.rating,
    parent_game.name, parent_game.slug,
    remakes.name, remakes.slug,
    remasters.name, remasters.slug,
    collection.name, collection.slug,
    franchises.name, franchises.slug,
    expanded_games.name, expanded_games.slug,
    standalone_expansions.name, standalone_expansions.slug,
    expansions.name, expansions.slug,
    game_modes.name, game_modes.slug,
    websites.url, websites.category,
    alternative_names.comment, alternative_names.name,
    involved_companies.developer, involved_companies.publisher,
    involved_companies.company.name,
    themes.name, player_perspectives.name,
    similar_games.name, similar_games.slug, similar_games.cover.image_id,
    cover.image_id;
    w slug="${slug}";
  `;
  const gamesPromise: Promise<Game[]> = getGames(body);

  const [session, games] = await Promise.all([sessionPromise, gamesPromise]);

  const userGameList = await prisma.list.findUnique({
    select: { isFavorited: true, status: true },
    // @ts-ignore
    where: { gameId: games[0].id, AND: { userId: session?.user.id || "" } },
  });

  return (
    <div>
      <GameComponent
        session={session}
        game={games[0]}
        userGameList={userGameList}
      />
    </div>
  );
}
