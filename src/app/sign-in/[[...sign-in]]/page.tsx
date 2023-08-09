"use client";

import { SignIn } from "@clerk/nextjs";
import Box from "@mui/material/Box";

export default function SignInPage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SignIn />
    </Box>
  );
}
