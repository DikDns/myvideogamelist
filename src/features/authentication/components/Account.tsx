"use client";

import { UserProfile } from "@clerk/nextjs";
import MUIBox from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

const box: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default async function Account() {
  return (
    <MUIBox sx={box}>
      <UserProfile />
    </MUIBox>
  );
}
