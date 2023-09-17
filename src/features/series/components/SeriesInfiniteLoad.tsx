"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import MUIBox from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import CircularLoading from "@/layouts/CircularLoading";
import useSeries from "../hooks/useSeries";
import SeriesCard from "./SeriesCard";

const seriesCardContainer: SxProps = {
  mt: 3,
  display: "grid",
  columnGap: { md: 6, xs: 3 },
  rowGap: { md: 4, xs: 2 },
  gridTemplateColumns: {
    sm: "1fr 1fr",
    xs: "1fr",
  },
};

export default function SeriesInfiniteLoad() {
  const { series, fetchMore, hasMore } = useSeries();
  return (
    <InfiniteScroll
      dataLength={series.length} //This is important field to render the next data
      next={fetchMore}
      hasMore={hasMore}
      loader={<CircularLoading />}
    >
      <MUIBox sx={seriesCardContainer}>
        {series.map((data, i) => {
          const key = `series_${data.slug}_${i}`;
          return <SeriesCard key={key} data={data} />;
        })}
      </MUIBox>
    </InfiniteScroll>
  );
}
