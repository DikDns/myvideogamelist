"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import MUIBox from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import CircularLoading from "@/layouts/CircularLoading";
import useFranchises from "../hooks/useFranchises";
import FranchiseCard from "./FranchiseCard";

const franchisesCardContainer: SxProps = {
  mt: 3,
  display: "grid",
  columnGap: { md: 6, xs: 3 },
  rowGap: { md: 4, xs: 2 },
  gridTemplateColumns: {
    sm: "1fr 1fr",
    xs: "1fr",
  },
};

export default function FranchisesInfiniteLoad() {
  const { franchises, fetchMore, hasMore } = useFranchises();
  return (
    <InfiniteScroll
      dataLength={franchises.length}
      next={fetchMore}
      hasMore={hasMore}
      loader={<CircularLoading />}
    >
      <MUIBox sx={franchisesCardContainer}>
        {franchises.map((data, i) => {
          const key = `series_${data.slug}_${i}`;
          return <FranchiseCard key={key} data={data} />;
        })}
      </MUIBox>
    </InfiniteScroll>
  );
}
