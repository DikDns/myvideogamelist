"use client";

import NextLink from "next/link";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";

export default function SteamUsername({ username }: { username: string }) {
  return (
    <MUITypography variant="caption">
      {username ? (
        <MUILink
          component={NextLink}
          href={`https://steamcommunity.com/id/${username}`}
          color="#fff"
          target="_blank"
        >
          {`steamcommunity.com/id/${username}`}
        </MUILink>
      ) : (
        "steamcommunity.com/id/"
      )}
    </MUITypography>
  );
}
