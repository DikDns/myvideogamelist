"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { h3, h5 } from "@/layouts/styles";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <Container>
      <Typography variant="h2" sx={h3} mb={1}>
        Not Found: {pathname}
      </Typography>
      <Typography component="p" sx={h5} mb={2}>
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
