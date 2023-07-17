"use client";

import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { h2, h3 } from "@/layouts/styles";
import { getImageUrl } from "@/lib/igdb";
import formatUnix from "@/utils/formatUnix";
import { Game } from "@/types/Game";

export default function GameHeading({ game }: { game: Game }) {
  return (
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
          background: "linear-gradient(to bottom, #121212b2 75%, #121212 100%)",
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
  );
}
