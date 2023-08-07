"use client";

import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { getImageUrl } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import { Franchise } from "@/types/Franchise";

export default function CardFranchise({ data }: { data: Franchise }) {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
      }}
    >
      <CardMedia
        component="img"
        className="cover"
        image={getImageUrl(
          // @ts-ignore
          data.games[0].cover?.image_id || "",
          "cover_small",
          "2x"
        )}
        title={`${data.name} Cover`}
        alt={`${data.name} Cover`}
        height="100%"
        sx={{ maxWidth: "90px" }}
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
          <Link href={`/franchises/${data.slug}`} component={NextLink}>
            {truncStr(data.name || "", 40)}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
