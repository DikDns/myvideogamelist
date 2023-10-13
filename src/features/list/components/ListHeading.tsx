"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUILink from "@mui/material/Link";
import MUITypography from "@mui/material/Typography";
import { UserContext } from "./UserProvider";

const h3 = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function ListHeading() {
  const user = useContext(UserContext);
  return (
    <MUITypography mb={2} variant="h3" sx={h3}>
      <MUILink
        color="#fff"
        component={NextLink}
        href={`/profile/${user?.username}`}
      >
        {`${user?.username?.toLowerCase()}'s`}
      </MUILink>
      {" List"}
    </MUITypography>
  );
}
