import igdb, { defaultField } from "@/lib/igdb";
import Game from "@/features/games/types/Game";

export async function getSearchGames(
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

async function searchGames(
  search: string,
  limit: number = 10,
  offset: number = 0
) {
  const body = `
    search "${search}";
    f ${defaultField};
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}

async function getTopRatedGames(limit: number = 5, offset: number = 0) {
  const body = `
    f ${defaultField};
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}
