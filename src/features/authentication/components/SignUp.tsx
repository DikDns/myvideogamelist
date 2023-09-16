"use client";

import { SignUp as ClerkSignUp } from "@clerk/nextjs";
import MUIBox from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

const box: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function SignUp() {
  return (
    <MUIBox sx={box}>
      <ClerkSignUp />
    </MUIBox>
  );
}
