"use client";

import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";

export default function LoginButton() {
  return (
    <Button variant="contained" color="primary" onClick={() => signIn("auth0")}>
      Sign in
    </Button>
  );
}
