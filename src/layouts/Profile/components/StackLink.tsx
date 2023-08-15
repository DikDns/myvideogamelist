"use client";

import NextLink from "next/link";
import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { UserProfileContext } from "../context";

export default function StackLink() {
  const user = useContext(UserProfileContext);

  return (
    <Stack direction="row" gap={2} justifyContent="space-evenly">
      <Link
        component={NextLink}
        color="#fff"
        underline="none"
        href={`/list/${user?.username}`}
      >
        <Stack alignItems="center">
          <Typography variant="body1">{`${user?.gameList.length}`}</Typography>
          <Typography variant="body2" color="darkgrey">{`Games`}</Typography>
        </Stack>
      </Link>
      <Link
        component={NextLink}
        color="#fff"
        underline="none"
        href={`/profile/${user?.username}/followers`}
      >
        <Stack alignItems="center">
          <Typography variant="body1">{`${user?.followers.length}`}</Typography>
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
        href={`/profile/${user?.username}/following`}
      >
        <Stack alignItems="center">
          <Typography variant="body1">{`${user?.following.length}`}</Typography>
          <Typography
            variant="body2"
            color="darkgrey"
          >{`Following`}</Typography>
        </Stack>
      </Link>
    </Stack>
  );
}
