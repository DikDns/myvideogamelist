import Search from "@/layouts/Search/Search";
import { getGames } from "@/lib/igdb";
import { SearchParams } from "@/types/SearchParams";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  let games;

  if (searchParams.q && searchParams.q.length > 1) {
    const body = `search "${searchParams.q}"; f *, genres.name, cover.image_id; l 20;`;
    games = await getGames(body);
  } else {
    const body = `
      f name, slug, cover.image_id, aggregated_rating, aggregated_rating_count, genres.name;
      w aggregated_rating != n & aggregated_rating_count > 7;
      s aggregated_rating desc;
      l 50;
    `;
    games = await getGames(body);
  }

  return (
    <div>
      <Search games={games} />
    </div>
  );
}
