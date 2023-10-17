"use client";

import NextLink from "next/link";
import { useContext } from "react";
import MUIStack from "@mui/material/Stack";
import MUITypography from "@mui/material/Typography";
import MUILink from "@mui/material/Link";
import { UserProfileContext } from "./UserProfileProvider";

export default function ProfileNetwork() {
  const user = useContext(UserProfileContext);

  return (
    <MUIStack direction="row" gap={2} justifyContent="space-evenly">
      <MUILink
        component={NextLink}
        color="#fff"
        underline="none"
        href={`/list/${user?.username}`}
      >
        <MUIStack alignItems="center">
          <MUITypography variant="body1">{`${user?.gameList?.length}`}</MUITypography>
          <MUITypography variant="body2" color="darkgrey">
            Games
          </MUITypography>
        </MUIStack>
      </MUILink>
      <MUILink
        component={NextLink}
        color="#fff"
        underline="none"
        href={`/profile/${user?.username}/followers`}
      >
        <MUIStack alignItems="center">
          <MUITypography variant="body1">{`${user?.followers?.length}`}</MUITypography>
          <MUITypography variant="body2" color="darkgrey">
            Followers
          </MUITypography>
        </MUIStack>
      </MUILink>
      <MUILink
        component={NextLink}
        color="#fff"
        underline="none"
        href={`/profile/${user?.username}/following`}
      >
        <MUIStack alignItems="center">
          <MUITypography variant="body1">{`${user?.following?.length}`}</MUITypography>
          <MUITypography variant="body2" color="darkgrey">
            Following
          </MUITypography>
        </MUIStack>
      </MUILink>
    </MUIStack>
  );
}
