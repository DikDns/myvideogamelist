"use client";

import { useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import BioControlled from "./components/BioControlled";
import { h2 } from "../styles";

import { User } from "./User";

export default function ProfileControl({ user }: { user: User }) {
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Container>
      <Stack gap={2}>
        <Box sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 2 }}>
          <Image
            src={user.image || ""}
            alt={`${user.username} picture`}
            width={64}
            height={64}
          />

          <Stack gap={1}>
            <Typography variant="h2" sx={h2}>
              {`${user.username?.toUpperCase()}`}
            </Typography>

            <BioControlled user={user} />
          </Stack>
        </Box>

        <Stack direction="row" gap={2} justifyContent="space-evenly">
          <Link
            component={NextLink}
            color="#fff"
            underline="none"
            href={`/list/${user.username}`}
          >
            <Stack alignItems="center">
              <Typography variant="body1">{`${user.gameLists.length}`}</Typography>
              <Typography
                variant="body2"
                color="darkgrey"
              >{`Games`}</Typography>
            </Stack>
          </Link>
          <Link
            component={NextLink}
            color="#fff"
            underline="none"
            href={`/profile/${user.username}/followers`}
          >
            <Stack alignItems="center">
              <Typography variant="body1">{`${user.followers.length}`}</Typography>
              <Typography
                variant="body2"
                color="darkgrey"
              >{`Followers`}</Typography>
            </Stack>
          </Link>
          <Link
            component={NextLink}
            color="#fff"
            underline="none"
            href={`/profile/${user.username}/following`}
          >
            <Stack alignItems="center">
              <Typography variant="body1">{`${user.following.length}`}</Typography>
              <Typography
                variant="body2"
                color="darkgrey"
              >{`Following`}</Typography>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
}
