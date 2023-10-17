"use client";

import { useContext } from "react";
import NextImage from "next/image";
import MUITypography from "@mui/material/Typography";
import MUIBox from "@mui/material/Box";
import MUIStack from "@mui/material/Stack";
import ProfileInformationBio from "./ProfileInformationBio";
import { UserProfileContext } from "../UserProfileProvider";

const h2 = {
  fontSize: {
    xs: "1.5rem",
    sm: "2.5rem",
    md: "3rem",
  },
  fontWeight: "600",
  letterSpacing: "1px",
};

export default function ProfileInformationLayout() {
  const user = useContext(UserProfileContext);

  return (
    <MUIBox sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 2 }}>
      <NextImage
        src={user?.image || ""}
        alt={`${user?.username} picture`}
        width={64}
        height={64}
      />

      <MUIStack gap={1}>
        <MUITypography variant="h2" sx={h2}>
          {`${user?.username?.toLowerCase()}`}
        </MUITypography>

        <ProfileInformationBio />
      </MUIStack>
    </MUIBox>
  );
}
