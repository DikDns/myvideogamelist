"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import VideoCarousel from "@/components/Carousel/VideoCarousel";
import CardSlide from "@/components/Carousel/CardSlide";
import NewTrailersList from "./components/NewTrailersList";
import CardGridColumn from "./components/CardGridColumn";
import HomeCarousel from "./components/HomeCarousel";
import HeadlineSlide from "./components/HeadlineSlide";
import { h1, h2, h3, h4 } from "../styles";
import { HomeData } from "@/types/HomeData";

export default async function Home({ data }: { data: HomeData }) {
  return (
    <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
      {/* TOP NEW RELEASE */}
      <Box component="section" mb={5}>
        <Typography sx={h1} variant="h1" mb={2}>
          {`Top New Releases`}
        </Typography>

        <HomeCarousel
          slides={data.topNewReleaseGames.map((game) => (
            <HeadlineSlide game={game} />
          ))}
        />
      </Box>

      {/* TOP FRANCHISES */}
      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Franchises`}
        </Typography>

        <HomeCarousel
          slides={data.topFranchises.map((franchise) => (
            <CardSlide type="franchises" data={franchise} />
          ))}
        />
      </Box>

      {/* TOP SERIES */}
      <Box component="section" mb={5}>
        <Typography sx={h2} variant="h2" mb={2}>
          {`Top Series`}
        </Typography>

        <HomeCarousel
          slides={data.topSeries.map((series) => (
            <CardSlide type="series" data={series} />
          ))}
        />
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
