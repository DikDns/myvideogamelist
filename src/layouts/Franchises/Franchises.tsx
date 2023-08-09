"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularLoading from "@/components/Loading/CircularLoading";
import CardFranchise from "@/components/Game/CardFranchise";
import BasicBreadcrumbs from "@/components/Navigation/BasicBreadcrumbs";
import { cardGameContainer } from "../styles";
import { getFranchises } from "@/lib/igdb";
import { Franchise } from "@/types/Franchise";

export default function Franchises() {
  const [franchises, setFranchises] = useState<Franchise[]>([]);
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
    const nextFranchises: Franchise[] = await getFranchises(body);

    if (nextFranchises.length <= 0) return setHasMore(false);

    setFranchises((prevFranchises) => [...prevFranchises, ...nextFranchises]);
    setOffset(franchises.length + nextFranchises.length);
  };

  return (
    <Container>
      <BasicBreadcrumbs />

      <InfiniteScroll
        dataLength={franchises.length} //This is important field to render the next data
        next={fetchMore}
        hasMore={hasMore}
        loader={<CircularLoading />}
      >
        <Box sx={cardGameContainer}>
          {franchises.map((franchise, i) => (
            // @ts-ignore
            <CardFranchise key={i} data={franchise} />
          ))}
        </Box>
      </InfiniteScroll>
    </Container>
  );
}
