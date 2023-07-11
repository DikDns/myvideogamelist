"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import VideoCarousel from "@/components/Carousel/VideoCarousel";
import NewTrailersList from "./components/NewTrailersList";
import TopNewReleaseGamesList from "./components/TopNewReleaseGamesList";
import CardListRow from "./components/CardListRow";
import CardListColumn from "./components/CardListColumn";
import { h1, h2, h3, h4 } from "./styles";
import { HomeData } from "@/types/HomeDataType";

import TestData from "./TestData";

export default async function Home({ data }: { data: HomeData }) {
  return (
    <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
      <Box component="section" mb={5}>
        <Typography sx={h1} variant="h1" mb={2}>
          {`Top New Release`}
        </Typography>
        <CardCarousel size="lg">
          <TopNewReleaseGamesList data={data.topNewReleaseGames} />
        </CardCarousel>
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Franchises`}
        </Typography>
        <CardCarousel>
          <CardListRow type="franchises" data={data.topFranchises} />
        </CardCarousel>
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Series`}
        </Typography>
        <CardCarousel>
          <CardListRow type="series" data={data.topSeries} />
        </CardCarousel>
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h3} variant="h3" mb={2}>
          {`New Trailers`}
        </Typography>
        <VideoCarousel>
          <NewTrailersList data={data.newTrailers} />
        </VideoCarousel>
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h4} variant="h4" mb={2}>
          {`Popular Upcoming`}
        </Typography>

        <CardListColumn data={data.popularUpcomingGames} />
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h4} variant="h4" mb={2}>
          {`New Releases`}
        </Typography>

        <CardListColumn data={data.newReleaseGames} />
      </Box>

      <Box component="section" mb={5}>
        <Typography sx={h4} variant="h4" mb={2}>
          {`Top Rated`}
        </Typography>

        <CardListColumn type="rated" data={data.topRatedGames} />
      </Box>

      <TestData data={data} />
    </Container>
  );
}
