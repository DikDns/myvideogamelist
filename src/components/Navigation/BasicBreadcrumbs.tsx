"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs() {
  const pathname = usePathname();
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ textTransform: "capitalize" }}>
      {pathname.split("/").map((path, i) => {
        const href =
          pathname.substring(0, pathname.indexOf(path) + path.length) || "/";

        return href === pathname ? (
          <Typography key={i} color="text.primary">
            {path}
          </Typography>
        ) : (
          <Link
            key={i}
            href={href}
            component={NextLink}
            underline="hover"
            color="inherit"
          >
            {path || "MVGL"}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
