"use client";

import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Star from "@mui/icons-material/Star";
import Link from "@mui/material/Link";
import { getImageUrl } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import { Game } from "@/types/Game";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "grid",
        gridTemplateColumns: "0.25fr 0.75fr",
      }}
    >
      <CardMedia
        component="img"
        className="cover"
        image={getImageUrl(game.cover?.image_id || "", "cover_small", "2x")}
        title={`${game.name} Cover`}
        alt={`${game.name} Cover`}
        height="100%"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 2,
        }}
      >
        <Typography className="name" variant="h6" component="h2">
          <Link href={`/games/${game.slug}`} component={NextLink}>
            {truncStr(game.name || "", 40)}
          </Link>
        </Typography>
        <Typography className="name" variant="caption" component="p">
          {game.genres?.map((genre) => genre.name).join(" | ")}
        </Typography>
        <Typography
          className="name"
          variant="caption"
          component="p"
          sx={{ display: "flex", alignItems: "center", gap: "2px" }}
        >
          <Star fontSize="inherit" color="secondary" />
          {game.aggregated_rating
            ? Math.round(game.aggregated_rating / 10)
            : "Not Rated"}
        </Typography>
      </CardContent>
    </Card>
  );
}
