import { useState, useEffect } from "react";
import igdb from "@/lib/igdb";
import Series from "../types/Series";

export default function useSeries() {
  const [series, setSeries] = useState<Series[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (series.length > 0) return;
    fetchMore();
  }, [series]);

  const fetchMore = async () => {
    const fetchLimit = 10;
    const body = `
      f name, slug, games.name, games.slug, games.cover.image_id;
      s games;
      w games != n & name != n;
      l ${fetchLimit};
      o ${offset};
    `;
    const nextSeries: Series[] = await igdb("collection", body);

    if (nextSeries.length <= 0) return setHasMore(false);

    setSeries((prevSeries) => [...prevSeries, ...nextSeries]);
    setOffset(series.length + nextSeries.length);
  };

  return { series, offset, hasMore, fetchMore };
}
