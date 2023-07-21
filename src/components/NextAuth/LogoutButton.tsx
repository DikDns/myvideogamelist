"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";

export default function LogoutButton() {
  const router = useRouter();

  const handleClick = async () => {
    const authUrl = process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL;
    await signOut({ redirect: false });
    router.push(`${authUrl}/v2/logout`);
  };

  return (
    <Button variant="outlined" color="error" onClick={handleClick}>
      Sign Out
    </Button>
  );
}
