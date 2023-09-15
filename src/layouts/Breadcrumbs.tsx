"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import MUIBox from "@mui/material/Box";
import MUITypography from "@mui/material/Typography";
import MUIBreadcrumbs from "@mui/material/Breadcrumbs";
import MUILink from "@mui/material/Link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  return (
    <MUIBox mt={1} mb={2}>
      <MUIBreadcrumbs
        aria-label="breadcrumb"
        sx={{ textTransform: "capitalize" }}
      >
        {pathname.split("/").map((path) => {
          const href =
            pathname.substring(0, pathname.indexOf(path) + path.length) || "/";

          return href === pathname ? (
            <MUITypography key={path} color="text.primary">
              {path}
            </MUITypography>
          ) : (
            <MUILink
              key={path}
              href={href}
              component={NextLink}
              underline="hover"
              color="inherit"
            >
              {path ?? "MVGL"}
            </MUILink>
          );
        })}
      </MUIBreadcrumbs>
    </MUIBox>
  );
}
