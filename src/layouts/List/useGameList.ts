"use client";

import { useState, useEffect } from "react";
import { getGames } from "@/lib/igdb";
import { GameList, User } from "./GameList";
import { Game } from "@/types/Game";
import { GameList as prismaGameList } from "@prisma/client";

export default function useGameList(user: User) {
  const [gameList, setGameList] = useState<GameList[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user.gameList.length === 0) return;
    fetchMore();
  }, []);

  useEffect(() => {
    if (gameList.length === user.gameList.length) {
      setIsLoading(false);
      setHasMore(false);
      return;
    }
    setHasMore(true);
  }, [gameList]);

  const fetchMore = async () => {
    setIsLoading(true);
    const fetchLimit = 20;
    let currentGameList: prismaGameList[] = [];

    for (let i = gameList.length; i < gameList.length + fetchLimit; i++) {
      if (user.gameList[i]) {
        currentGameList.push(user.gameList[i]);
      }
    }

    const body = `
      f name, slug, cover.image_id;
      l ${fetchLimit};
      w id=(${currentGameList.map((list) => list.gameId).join(",")});
    `;

    const nextGame: Game[] = await getGames(body);

    const nextGameList: GameList[] = [];

    for (let i = 0; i < currentGameList.length; i++) {
      const currentGame = nextGame.find(
        (item) => item.id === currentGameList[i].gameId
      );

      if (currentGame) {
        nextGameList.push({
          userId: user.id,
          gameId: currentGame.id,
          game: currentGame,
          isFavorited: currentGameList[i].isFavorited,
          score: currentGameList[i].score,
          status: currentGameList[i].status,
        });
      }
    }

    setGameList((prevGameList) => [...prevGameList, ...nextGameList]);
    setIsLoading(false);
  };

  return { gameList, isLoading, hasMore, fetchMore };
}
