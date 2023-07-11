import NextLink from "next/link";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { VideoGame } from "@/types/VideoGameType";

export default function CardListColumn({ data }: { data: VideoGame[] }) {
  return (
    <Stack gap={1}>
      {data.map((dt) => (
        <Card sx={{ display: "flex" }} key={dt.id}>
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
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "primary." }}>
              <Link component={NextLink} href={`/games/${dt.slug}`}>
                {dt.name}
              </Link>
            </Typography>

            <Typography variant="body1" sx={{ fontSize: "0.75rem" }}>
              {/* {dt} */}
            </Typography>

            <Typography variant="caption">
              Release in
              {new Date(1703980800 * 1000).getFullYear()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
