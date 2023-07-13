"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardCarousel from "@/components/Carousel/CardCarousel";
import VideoCarousel from "@/components/Carousel/VideoCarousel";
import NewTrailersList from "./components/NewTrailersList";
import TopNewReleaseGamesList from "./components/TopNewReleaseGamesList";
import CardListRow from "./components/CardListRow";
import CardGridColumn from "./components/CardGridColumn";
import { h1, h2, h3, h4 } from "../styles";
import { HomeData } from "@/types/HomeData";

export default async function Home({ data }: { data: HomeData }) {
  return (
    <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
      {/* TOP NEW RELEASE */}
      <Box component="section" mb={5}>
        <Typography sx={h1} variant="h1" mb={2}>
          {`Top New Release`}
        </Typography>
        <CardCarousel size="lg">
          <TopNewReleaseGamesList data={data.topNewReleaseGames} />
        </CardCarousel>
      </Box>

      {/* TOP FRANCHISES */}
      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Franchises`}
        </Typography>
        <CardCarousel>
          <CardListRow type="franchises" data={data.topFranchises} />
        </CardCarousel>
      </Box>

      {/* TOP SERIES */}
      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Series`}
        </Typography>
        <CardCarousel>
          <CardListRow type="series" data={data.topSeries} />
        </CardCarousel>
      </Box>

      {/* NEW VIDEO TRAILERS */}
      <Box component="section">
        <Typography sx={h3} variant="h3" mb={2}>
          {`New Trailers`}
        </Typography>
        <VideoCarousel>
          <NewTrailersList data={data.newTrailers} />
        </VideoCarousel>
      </Box>

      <Box
        sx={{
          display: "grid",
          columnGap: 4,
          rowGap: 2,
          gridTemplateColumns: { sm: "1fr", md: "1fr 1fr 1fr" },
        }}
      >
        {/* POPULAR UPCOMING */}
        <Box>
          <Typography sx={h4} variant="h4" mt={5}>
            {`Popular Upcoming`}
          </Typography>
        </Box>

        <CardGridColumn rowIndex={2} col={1} data={data.popularUpcomingGames} />

        {/* TOP RATED */}
        <Box sx={{ gridArea: { md: "1 / 2 / 2 / 3" } }}>
          <Typography sx={h4} variant="h4" mt={5}>
            {`Top Rated`}
          </Typography>
        </Box>

        <CardGridColumn
          type="rated"
          rowIndex={2}
          col={2}
          data={data.topRatedGames}
        />

        {/* NEW RELEASES */}
        <Box sx={{ gridArea: { md: "1 / 3 / 2 / 4" } }}>
          <Typography sx={h4} variant="h4" mt={5}>
            {`New Releases`}
          </Typography>
        </Box>

        <CardGridColumn rowIndex={2} col={3} data={data.newReleaseGames} />
      </Box>
    </Container>
  );
}
