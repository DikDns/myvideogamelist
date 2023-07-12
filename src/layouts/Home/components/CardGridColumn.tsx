import NextLink from "next/link";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Game } from "@/types/Game";

export default function CardListColumn({
  type = "default",
  data,
  col,
  rowIndex,
}: {
  type?: "default" | "rated";
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
          sx={{ width: 90 }}
          image={`https://images.igdb.com/igdb/image/upload/t_cover_small/${dt.cover?.image_id}.jpg`}
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
            <Typography variant="caption">
              <Chip
                label={`${dt.aggregated_rating}`.substring(0, 4)}
                variant="filled"
                color="secondary"
                sx={{ mr: 1 }}
              />
              {`${dt.aggregated_rating_count} Critic Reviews`}
            </Typography>
          ) : (
            <Typography variant="caption">
              {`Release in ${new Date(
                // @ts-ignore
                dt.first_release_date * 1000
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}`}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  ));
}
