"use client";

import NextLink from "next/link";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Star from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import { getImageUrl } from "@/lib/igdb";
import formatUnix from "@/utils/formatUnix";
import timeAgo from "@/utils/timeAgo";
import { Game } from "../types/HomeData";

export default function CardGridColumn({
  type = "default",
  data,
  col,
  rowIndex,
}: {
  type?: "default" | "rated" | "upcoming";
  data: Game[];
  col: number;
  rowIndex: number;
}) {
  return data.map((dt, i) => (
    <Box
      key={dt.id}
      sx={{
        gridArea: {
          md: `${i + rowIndex} / ${col} / ${i + rowIndex + 1} / ${col + 1}`,
        },
      }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={getImageUrl(dt.cover?.image_id || "", "cover_small", "2x")}
          alt={`${dt.name} cover`}
          title={`${dt.name} cover`}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "primary." }}>
            <Link component={NextLink} href={`/games/${dt.slug}`}>
              {dt.name}
            </Link>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "0.75rem" }}>
            {dt.genres?.map((genre) => genre.name).join(" | ")}
          </Typography>

          {type === "rated" ? (
            <Typography
              variant="caption"
              display="flex"
              alignItems="center"
              gap="2px"
            >
              <Star fontSize="inherit" color="secondary" />
              {`${Math.round((dt.aggregated_rating || 1) / 10)}`}
            </Typography>
          ) : type === "upcoming" ? (
            <Typography variant="caption">
              {`${timeAgo(new Date((dt.first_release_date || 0) * 1000))}`}
            </Typography>
          ) : (
            <Typography variant="caption">
              {`Release in ${formatUnix(dt.first_release_date || 0)}`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  ));
}
