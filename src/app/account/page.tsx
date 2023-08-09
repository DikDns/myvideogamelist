"use client";

import { UserProfile } from "@clerk/nextjs";
import Box from "@mui/material/Box";

export default async function AccountPage() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <UserProfile />
    </Box>
  );
}
