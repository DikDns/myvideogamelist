"use client";

import { SignUp } from "@clerk/nextjs";
import Box from "@mui/material/Box";

export default function SignUpPage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <SignUp redirectUrl="/auth" />
    </Box>
  );
}
