"use client";

import Image from "next/image";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SxProps } from "@mui/material/styles";
import IMStar from "@mui/icons-material/Star";
import { getImageUrl } from "@/lib/igdb";
import formatUnix from "@/utils/formatUnix";
import { GameContext } from "./GameLayout";
import Game from "../types/Game";

const h2: SxProps = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
  fontWeight: "600",
  letterSpacing: "1px",
};

const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GameHeading() {
  const matches = useMediaQuery("(min-width:600px)");
  const game = useContext(GameContext) as Game;

  const isScreenshotImage = game.screenshots
    ? game.screenshots[0].image_id || ""
    : "";
  const isArtworkImage = game.artworks
    ? game.artworks[0].image_id || ""
    : isScreenshotImage;

  const imageUrl = getImageUrl(isArtworkImage, "screenshot_med");

  return (
    <Box
      mt={-3}
      pt={10}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${imageUrl});`,
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, #12121200 0%, #121212b2 50%, #121212 100%)",
          backdropFilter: "blur(4px)",
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
            }}
          >
            <Grid
              item
              sx={{ borderRadius: "2px", overflow: "hidden" }}
              xs="auto"
            >
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
                  <IMStar fontSize="inherit" color="secondary" />
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
    </Box>
  );
}
