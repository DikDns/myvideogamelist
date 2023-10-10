"use client";

import NextLink from "next/link";
import MUICard from "@mui/material/Card";
import MUICardMedia from "@mui/material/CardMedia";
import MUICardContent from "@mui/material/CardContent";
import MUITypography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import { getImageUrl } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";
import Franchises from "../types/Franchise";

export default function FranchiseCard({ data }: { data: Franchises }) {
  return (
    <MUICard
      variant="outlined"
      sx={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
      }}
    >
      <MUICardMedia
        component="img"
        className="cover"
        image={getImageUrl(
          data.games?.[0].cover?.image_id || "",
          "cover_small",
          "2x"
        )}
        title={`${data.name} Cover`}
        alt={`${data.name} Cover`}
        height="100%"
        sx={{ maxWidth: "90px" }}
      />
      <MUICardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 2,
        }}
      >
        <MUITypography className="name" variant="h6" component="h2">
          <MUILink href={`/franchises/${data.slug}`} component={NextLink}>
            {truncStr(data.name || "", 40)}
          </MUILink>
        </MUITypography>
      </MUICardContent>
    </MUICard>
  );
}
