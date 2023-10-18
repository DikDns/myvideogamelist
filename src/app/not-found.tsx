"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <Container>
      <Typography
        variant="h2"
        sx={{
          fontSize: {
            xs: "1.25rem",
            sm: "2rem",
            md: "2.5rem",
          },
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
        mb={1}
      >
        Not Found: {pathname}
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "0.75rem",
            md: "0.75rem",
          },
          fontWeight: "500",
          letterSpacing: "0.5px",
        }}
        mb={2}
      >
        Could not find requested resource
      </Typography>
      <Typography variant="body2">
        <Link component={NextLink} href="/">
          Back to MVGL
        </Link>
      </Typography>
    </Container>
  );
}
