"use client";

import { useEffect, useState, useContext } from "react";
import igdb from "@/lib/igdb";
import Game from "@/features/games/types/Game";
import { UserProfileContext } from "../components/UserProfileProvider";

export default function useFavoriteGames() {
  const user = useContext(UserProfileContext);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.gameList?.length === 0) {
      setIsLoading(false);
      return;
    }

    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const filteredPlayingGames = [];

    const gameList = user?.gameList
      ?.filter((game) => game.isFavorited)
      .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

    if (!gameList) return;

    for (let i = 0; i < fetchLimit; i++) {
      if (gameList[i]) {
        filteredPlayingGames.push(gameList[i]);
      }
    }

    const body = `
      f name, slug, cover.image_id;
      l ${fetchLimit};
      w id=(${filteredPlayingGames.map((game) => game.gameId).join(",")});
    `;

    const nextGames = await igdb("games", body);

    setGames(nextGames);
    setIsLoading(false);
  };

  return { games, isLoading };
}
