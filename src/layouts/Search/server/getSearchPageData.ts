import { SearchParams } from "@/types/SearchParams";
import { getGames } from "@/lib/igdb";
import { Game } from "@/types/Game";

export default async function getSearchPageData(searchParams: SearchParams) {
  let body = `
    f name, slug, cover.image_id, aggregated_rating, genres.name, first_release_date;
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l 10;
  `;

  if (searchParams.q && searchParams.q.length > 1) {
    body = `search "${searchParams.q}"; f name, first_release_date, aggregated_rating, category, slug, cover.image_id, genres.name, cover.image_id; l 10;`;
  }

  const games: Game[] = await getGames(body);

  return games.sort((a, b) => (a.category || 0) - (b.category || 0));
}
