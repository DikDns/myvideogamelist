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
import { h1, h2, h3 } from "../styles";
import formatUnix from "@/utils/formatUnix";

export default function Game({ data }: { data: Game }) {
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <Box
        pt={8}
        sx={{
          backgroundImage: `url(${getImageUrl(
            // @ts-ignore
            data.screenshots[0].image_id || "",
            "screenshot_med"
          )});`,
        }}
      >
        <Grid
          container
          pt={2}
          px={2}
          gap={2}
          sx={{
            backgroundColor: "#121212b2",
            backdropFilter: "blur(4px)",
          }}
        >
          <Grid item xs="auto">
            <Image
              src={getImageUrl(data.cover?.image_id || "", "cover_small")}
              alt={`${data.name} Cover`}
              width={90}
              height={128}
            />
          </Grid>
          <Grid container item direction="column" xs="auto" gap={1}>
            <Grid item>
              <Typography sx={h2}>{data.name}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={h3}>
                {`${formatUnix(data.first_release_date || 0)}`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Container component="main" sx={{ overflow: "hidden", my: 8 }}>
        <AgeRatingImages ageRatings={data.age_ratings || []} />
      </Container>
    </>
  );
}
