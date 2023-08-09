import { searchGames, getTopRatedGames } from "@/lib/igdb";
import { Game } from "@/types/Game";

export default async function getSearchGames(
  search: string | null,
  limit: number,
  offset: number
) {
  let games: Game[];

  if (search && search.length > 1) {
    games = await searchGames(search, limit, offset);
    games.sort((a, b) => (a.category || 0) - (b.category || 0));
  } else {
    games = await getTopRatedGames(limit, offset);
  }

  return games;
}
