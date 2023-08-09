import {
  getTopNewReleaseGames,
  getTopRatedGames,
  getPopularUpcomingGames,
  getNewReleaseGames,
} from "@/lib/igdb";
import { brackets } from "../components/GamesBracketSelect";

export default async function getGamesBracket(
  bracket: string,
  offset: number = 0,
  limit: number = 10
) {
  if (bracket === brackets.topRated) {
    return await getTopRatedGames(limit, offset);
  }

  if (bracket === brackets.topNewReleases) {
    return await getTopNewReleaseGames(limit, offset);
  }

  if (bracket === brackets.topUpcoming) {
    return await getPopularUpcomingGames(limit, offset);
  }

  if (bracket === brackets.newReleases) {
    return await getNewReleaseGames(limit, offset);
  }

  return [];
}
