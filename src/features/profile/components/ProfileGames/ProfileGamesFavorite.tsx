"use client";

import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import MUICircularProgress from "@mui/material/CircularProgress";
import SlideCard from "../Carousel/SlideCard";
import CarouselProfile from "../Carousel/CarouselProfile";
import useGamesFavorite from "../../hooks/useGamesFavorite";

const h3 = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function ProfileGamesFavorite() {
  const { games, isLoading } = useGamesFavorite();

  return (
    <MUIStack gap={1}>
      <MUITypography variant="h3" sx={h3}>
        Favorite
      </MUITypography>

      {!isLoading ? (
        games.length > 0 ? (
          <CarouselProfile
            slides={games.map((game, index) => {
              const key = `${game.id}_${game.slug}_${index}}`;
              return <SlideCard type="games" data={game} key={key} />;
            })}
          />
        ) : (
          "No Games"
        )
      ) : (
        <MUICircularProgress />
      )}
    </MUIStack>
  );
}
