"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { User } from "./User";

export default function ProfileControl({ user }: { user: User }) {
  return (
    <Container>
      <Typography>{`Profile Control: ${user.username}`}</Typography>
    </Container>
  );
}
