import { SearchParams } from "@/types/SearchParams";
import { getGames } from "@/lib/igdb";
import { Game } from "@/types/Game";

export default async function getSearchPageData(searchParams: SearchParams) {
  let games: Game[];

  if (searchParams.q && searchParams.q.length > 1) {
    const body = `search "${searchParams.q}"; f name, aggregated_rating, category, slug, cover.image_id, genres.name, cover.image_id; l 10;`;
    games = await getGames(body);
  } else {
    const body = `
      f name, slug, cover.image_id, aggregated_rating, genres.name;
      w aggregated_rating != n & aggregated_rating_count > 7;
      s aggregated_rating desc;
      l 10;
    `;
    games = await getGames(body);
  }

  return games.sort((a, b) => (a.category || 0) - (b.category || 0));
}
