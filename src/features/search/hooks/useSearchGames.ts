import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Game from "@/features/games/types/Game";
import { getSearchGames } from "../lib/nextServerSearchLayout";

export default function useSearchGames() {
  const searchParam = useSearchParams();
  const search = searchParam.get("q");

  const [games, setGames] = useState<Game[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setHasMore(true);
    setGames([]);
    setOffset(0);
  }, [searchParam]);

  useEffect(() => {
    if (games.length > 1) return;
    if (isLoading) return;
    fetchMore();
  }, [games]);

  const fetchMore = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const nextGames = await getSearchGames(search, fetchLimit, offset);

    if (nextGames.length <= 0) return setHasMore(false);

    setGames((prevGames) => [...prevGames, ...nextGames]);
    setOffset((prevOffset) => prevOffset + nextGames.length);
    setHasMore(true);
    setIsLoading(false);
  };

  return { games, hasMore, fetchMore, isLoading, search };
}
