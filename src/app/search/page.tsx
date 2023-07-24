import Search from "@/layouts/Search/Search";
import { getGames } from "@/lib/igdb";
import { Game } from "@/types/Game";
import { SearchParams } from "@/types/SearchParams";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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

  games.sort((a, b) => (a.category || 0) - (b.category || 0));

  return (
    <div>
      <Search games={games} />
    </div>
  );
}
