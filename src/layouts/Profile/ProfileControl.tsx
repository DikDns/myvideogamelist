"use client";

import { useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { h2 } from "../styles";
import { User } from "./User";

export default function ProfileControl({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
        mb={2}
      >
        <Image
          src={user.image || ""}
          alt={`${user.username} picture`}
          width={64}
          height={64}
        />
        <Stack direction="row" gap={2}>
          <Stack alignItems="center">
            <Typography variant="body1">{`${user.gameLists.length}`}</Typography>
            <Typography variant="body2">
              <Link
                component={NextLink}
                href={`/list/${user.username}`}
                color="#fff"
              >
                {`Games`}
              </Link>
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body1">{`${user.followers.length}`}</Typography>
            <Typography variant="body2">
              <Link
                component={NextLink}
                href={`/profile/${user.username}/followers`}
                color="#fff"
              >
                {`Followers`}
              </Link>
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <Typography variant="body1">{`${user.following.length}`}</Typography>
            <Typography variant="body2">
              <Link
                component={NextLink}
                href={`/profile/${user.username}/following`}
                color="#fff"
              >
                {`Following`}
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Typography
        variant="h2"
        sx={h2}
      >{`${user.username?.toUpperCase()}`}</Typography>
    </Container>
  );
}
