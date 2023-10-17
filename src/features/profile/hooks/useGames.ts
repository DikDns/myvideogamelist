"use client";

import { useEffect, useState, useContext } from "react";
import igdb from "@/lib/igdb";
import { ListStatus } from "@prisma/client";
import Game from "@/features/games/types/Game";
import { UserProfileContext } from "../components/UserProfileProvider";

export default function useGames(status: ListStatus) {
  const user = useContext(UserProfileContext);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user?.gameList?.length === 0) {
      setIsLoading(false);
      return;
    }

    return () => {
      fetchGames();
    };
  }, []);

  const fetchGames = async () => {
    setIsLoading(true);
    const fetchLimit = 10;
    const filteredGames = [];

    const gameList = user?.gameList
      ?.filter((game) => game.status === status)
      .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));

    if (!gameList) return;

    for (let i = 0; i < fetchLimit; i++) {
      if (gameList[i]) {
        filteredGames.push(gameList[i]);
      }
    }

    const body = `
      f name, slug, cover.image_id;
      l ${fetchLimit};
      w id=(${filteredGames.map((game) => game.gameId).join(",")});
    `;

    const nextGames = await igdb("games", body);

    setGames(nextGames);
    setIsLoading(false);
  };

  return { games, isLoading };
}
