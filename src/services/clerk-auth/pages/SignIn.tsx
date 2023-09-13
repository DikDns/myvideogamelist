"use client";

import { SignIn as ClerkSignIn } from "@clerk/nextjs";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";

const box: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function SignIn() {
  return (
    <Box sx={box}>
      <ClerkSignIn />
    </Box>
  );
}
