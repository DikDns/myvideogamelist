"use client";

import { useEffect, useState } from "react";
import { getGames } from "@/lib/igdb";
import { User } from "../User";

export default function useFavoriteGames(user: User | null) {
  const [gameList, _] = useState(
    user?.gameList
      ? user.gameList
          .filter((game) => game.isFavorited)
          .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1))
      : []
  );
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (gameList.length === 0) return;
    fetchGames();
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const filteredPlayingGames = [];

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

    const nextGames = await getGames(body);

    setGames(nextGames);
    setIsLoading(false);
  };

  return { games, isLoading };
}
