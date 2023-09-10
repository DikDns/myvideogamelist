"use client";

import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import CardSlide from "@/components/Carousel/CardSlide";
import { h3 } from "@/layouts/styles";
import ProfileCarousel from "./ProfileCarousel";
import useFavoriteGames from "./useFavoriteGames";
import { UserProfileContext } from "../context";

export default function Favorite() {
  const user = useContext(UserProfileContext);
  const { games, isLoading } = useFavoriteGames(user);

  return (
    <Stack gap={1}>
      <Typography variant="h3" sx={h3}>
        {"Favorite"}
      </Typography>
      {!isLoading ? (
        games.length > 0 ? (
          <ProfileCarousel
            slides={games.map((game) => (
              <CardSlide type="games" data={game} />
            ))}
          />
        ) : (
          "No Games"
        )
      ) : (
        <CircularProgress />
      )}
    </Stack>
  );
}