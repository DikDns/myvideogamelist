import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  getTopNewReleaseGames,
  getTopRatedGames,
  getPopularUpcomingGames,
  getNewReleaseGames,
} from "@/lib/igdb";
import { brackets } from "../components/GamesBracketSelect";
import Game from "../types/Game";

export default function useGamesBracket() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bracketParams = validateBracketParams(searchParams.get("bracket"));
  const [bracket, setBracket] = useState(bracketParams);

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setOffset(0);
    setGames([]);
    setHasMore(false);
    setIsLoading(false);
    router.push(`/games?bracket=${bracket}`);
  }, [bracket]);

  useEffect(() => {
    if (isLoading) return;
    if (games.length > 0) return;
    fetchMore();
  }, [games]);

  const fetchMore = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const nextGames: Game[] = await getGamesBracket(
      bracket,
      offset,
      fetchLimit
    );

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset(games.length + nextGames.length);
    setHasMore(true);
    setIsLoading(false);
  };

  return { games, fetchMore, hasMore, isLoading, bracket, setBracket };
}

function validateBracketParams(param: string | null) {
  return param === brackets.topRated ||
    param === brackets.topNewReleases ||
    param === brackets.topUpcoming ||
    param === brackets.newReleases
    ? param
    : brackets.topNewReleases;
}

async function getGamesBracket(
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
