"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Game } from "@/types/Game";
import { getImageUrl } from "@/lib/igdb";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AgeRatingImages from "./components/AgeRatingImages";
import { h2, h3 } from "../styles";
import formatUnix from "@/utils/formatUnix";

export default function Game({ game }: { game: Game }) {
  useEffect(() => {
    console.log(game);
  }, []);

  return (
    <>
      <Box
        pt={8}
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${getImageUrl(
            // @ts-ignore
            game.screenshots[0].image_id || "",
            "screenshot_med"
          )});`,
        }}
      >
        <Grid
          alignItems="center"
          flexWrap="nowrap"
          container
          pt={2}
          pb={1}
          px={2}
          gap={2}
          sx={{
            backgroundColor: "#121212b2",
            backdropFilter: "blur(4px)",
          }}
        >
          <Grid item sx={{ borderRadius: "2px", overflow: "hidden" }} xs="auto">
            <Image
              src={getImageUrl(game.cover?.image_id || "", "cover_small")}
              alt={`${game.name} Cover`}
              width={90}
              height={128}
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
                {`${formatUnix(game.first_release_date || 0)}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
        <AgeRatingImages ageRatings={game.age_ratings || []} />
      </Container>
    </>
  );
}
