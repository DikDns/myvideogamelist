import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { getGames } from "@/lib/igdb";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Game } from "@/types/Game";
import truncStr from "@/utils/truncStr";

export default async function getGamePageData(slug: string) {
  const sessionPromise = getServerSession(authOptions);
  const body = `
    f slug, name, summary, first_release_date,
    aggregated_rating, aggregated_rating_count,
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

  const gameListUser = await prisma.gameList.findFirst({
    select: { isFavorited: true, status: true, score: true },
    where: { gameId: games[0].id, userId: session?.user.id || "" },
  });

  return { gameListUser, session, games };
}

export async function getGamePageMetadata(slug: string) {
  const body = `f name; w slug="${slug}";`;
  const games: Game[] = await getGames(body);

  if (games.length < 1) notFound();

  return {
    title: `${truncStr(games[0].name || "", 20)} | MVGL`,
  };
}
