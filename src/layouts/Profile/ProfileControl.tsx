"use client";

import { useEffect } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { User } from "./User";

export default function ProfileControl({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <Stack>
        <Image
          src={user.image || ""}
          alt={`${user.username} picture`}
          width={128}
          height={128}
        />
      </Stack>
      <Typography>{`Profile Control: ${user.username}`}</Typography>
    </Container>
  );
}
