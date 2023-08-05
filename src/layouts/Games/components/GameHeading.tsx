"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import Star from "@mui/icons-material/Star";
import { h2, h3 } from "@/layouts/styles";
import { getImageUrl } from "@/lib/igdb";
import formatUnix from "@/utils/formatUnix";
import { Game } from "@/types/Game";

export default function GameHeading({ game }: { game: Game }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box
      mt={-3}
      pt={10}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${getImageUrl(
          game.artworks
            ? game.artworks[0].image_id || ""
            : game.screenshots
            ? game.screenshots[0].image_id || ""
            : "",
          "screenshot_med"
        )});`,
      }}
    >
      <Container>
        <Grid
          alignItems="center"
          flexWrap="nowrap"
          container
          sx={{
            py: {
              xs: 2,
              md: 1,
            },
            gap: 2,
            background:
              "linear-gradient(to bottom, #12121200 0%, #121212b2 50%, #121212 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Grid item sx={{ borderRadius: "2px", overflow: "hidden" }} xs="auto">
            <Image
              src={getImageUrl(game.cover?.image_id || "", "cover_big", "2x")}
              alt={`${game.name} Cover`}
              width={matches ? 180 : 90}
              height={matches ? 256 : 128}
            />
          </Grid>
          <Grid container item direction="column" xs={10} gap={1}>
            <Grid item>
              <Typography sx={h2} variant="h2">
                {game.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={h3} variant="h3">
                {game.first_release_date
                  ? `${formatUnix(game.first_release_date || 0)}`
                  : ""}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className="name"
                variant="caption"
                sx={{ display: "flex", alignItems: "center", gap: "2px" }}
              >
                <Star fontSize="inherit" color="secondary" />
                {game.aggregated_rating
                  ? `${Math.round(game.aggregated_rating / 10)} from
                ${game.aggregated_rating_count} critic reviews`
                  : "Not Rated"}{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
