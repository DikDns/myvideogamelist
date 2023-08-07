"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularLoading from "@/components/Loading/CircularLoading";
import CardSeries from "@/components/Game/CardSeries";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { cardGameContainer } from "../styles";
import { getSeries } from "@/lib/igdb";
import { Series } from "@/types/Series";

export default function Series() {
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
    const nextSeries: Series[] = await getSeries(body);

    if (nextSeries.length <= 0) return setHasMore(false);

    setSeries((prevSeries) => [...prevSeries, ...nextSeries]);
    setOffset(series.length + nextSeries.length);
  };

  return (
    <Container>
      <BasicBreadcrumbs />

      <InfiniteScroll
        dataLength={series.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
      >
        <Box sx={cardGameContainer}>
          {series.map((data, i) => (
            // @ts-ignore
            <CardSeries key={i} data={data} />
          ))}
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
