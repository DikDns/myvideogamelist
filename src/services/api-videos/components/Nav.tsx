"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs() {
  const pathname = usePathname();
  return (
    <Box mt={1} mb={2}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: "capitalize" }}>
        {pathname.split("/").map((path) => {
          const href =
            pathname.substring(0, pathname.indexOf(path) + path.length) || "/";

          return href === pathname ? (
            <Typography key={path} color="text.primary">
              {path}
            </Typography>
          ) : (
            <Link
              key={path}
              href={href}
              component={NextLink}
              underline="hover"
              color="inherit"
            >
              {path ?? "MVGL"}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
}
