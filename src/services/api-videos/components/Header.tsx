"use client";

import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";

export const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function Header() {
  return (
    <Typography mb={4} variant="h3" sx={h3}>
      Videos
    </Typography>
  );
}
