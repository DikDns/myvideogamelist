"use client";

import MUITypography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";

const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function SeriesDetailHeader({ name }: { name: string }) {
  return (
    <MUITypography mb={1} variant="h3" sx={h3}>
      {name} Series
    </MUITypography>
  );
}
