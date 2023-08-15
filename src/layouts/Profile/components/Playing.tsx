"use client";

import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CardSlide from "@/components/Carousel/CardSlide";
import { h3 } from "@/layouts/styles";
import ProfileCarousel from "./ProfileCarousel";
import usePlayingGames from "./usePlayingGames";
import { UserProfileContext } from "../context";

export default function Playing() {
  const user = useContext(UserProfileContext);
  const playingGames = usePlayingGames(user);

  return (
    <Stack gap={1}>
      <Typography variant="h3" sx={h3}>
        {"Currently Playing"}
      </Typography>
      {playingGames.length > 0 ? (
        <ProfileCarousel
          slides={playingGames.map((game) => (
            <CardSlide type="games" data={game} />
          ))}
        />
      ) : (
        "No Games"
      )}
    </Stack>
  );
}
