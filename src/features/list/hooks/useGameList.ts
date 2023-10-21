"use client";

import { useState, useEffect } from "react";
import { getGames } from "@/lib/igdb";
import GameList, { User } from "../types/GameList";
import Game from "@/features/games/types/Game";
import { GameList as prismaGameList } from "@prisma/client";

export default function useGameList(user: User | null) {
  const [gameList, setGameList] = useState<GameList[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.gameList.length === 0) return;

    const fetchData = () => fetchMore();

    fetchData();
  }, []);

  useEffect(() => {
    console.log(gameList);
    if (gameList.length === user?.gameList.length) {
      setIsLoading(false);
      setHasMore(false);
      return;
    }
    setHasMore(true);
  }, [gameList]);

  const fetchMore = async () => {
    setIsLoading(true);
    const fetchLimit = 20;
    const currentGameList: prismaGameList[] = [];

    for (let i = gameList.length; i < gameList.length + fetchLimit; i++) {
      if (user?.gameList[i]) {
        currentGameList.push(user?.gameList[i]);
      }
    }

    if (currentGameList.length === 0) return;

    const body = `
      f name, slug, cover.image_id;
      l ${fetchLimit};
      w id=(${currentGameList.map((list) => list.gameId).join(",")});
    `;

    const nextGame: Game[] = await getGames(body);

    const nextGameList: GameList[] = [];

    for (const currentGameListElement of currentGameList) {
      const currentGame = nextGame.find(
        (item) => item.id === currentGameListElement.gameId
      );

      if (currentGame) {
        nextGameList.push({
          userId: user!.id,
          gameId: currentGame.id,
          game: currentGame,
          isFavorited: currentGameListElement.isFavorited,
          score: currentGameListElement.score,
          status: currentGameListElement.status,
        });
      }
    }

    setGameList((prevGameList) => [...prevGameList, ...nextGameList]);
    setIsLoading(false);
  };

  return { gameList, isLoading, hasMore, fetchMore };
}
