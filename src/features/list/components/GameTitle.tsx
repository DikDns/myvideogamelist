"use client";

import NextLink from "next/link";
import MUILink from "@mui/material/Link";

export default function GameTitle({
  name,
  slug,
}: {
  name?: string | null;
  slug?: string | null;
}) {
  return (
    <MUILink color="#fff" component={NextLink} href={`/games/${slug}`}>
      {name}
    </MUILink>
  );
}
