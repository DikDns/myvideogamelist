import { useState, useEffect } from "react";
import igdb from "@/lib/igdb";
import Franchises from "../types/Franchises";

export default function useFranchises() {
  const [franchises, setFranchises] = useState<Franchises[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (franchises.length > 0) return;
    fetchMore();
  }, [franchises]);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const body = `
      f name, slug, games.name, games.slug, games.cover.image_id;
      s games;
      w games != n & name != n;
      l ${fetchLimit};
      o ${offset};
    `;
    const nextFranchises: Franchises[] = await igdb("franchises", body);

    if (nextFranchises.length <= 0) return setHasMore(false);

    setFranchises((prevFranchises) => [...prevFranchises, ...nextFranchises]);
    setOffset(franchises.length + nextFranchises.length);
  };

  return { franchises, offset, hasMore, fetchMore };
}
