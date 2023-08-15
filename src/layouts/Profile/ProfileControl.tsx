"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NextLink from "next/link";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BioControlled from "./components/BioControlled";
import StackLink from "./components/StackLink";
import { h2 } from "../styles";
import { User } from "./User";
import { UserProfileContext } from "./context";

export default function ProfileControl({ user }: { user: User }) {
  const [userProfile, setUserProfile] = useState(user);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <UserProfileContext.Provider value={userProfile}>
      <Container>
        <Stack gap={2}>
          <Box
            sx={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 2 }}
          >
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

              <BioControlled />
            </Stack>
          </Box>

          <StackLink />
        </Stack>
      </Container>
    </UserProfileContext.Provider>
  );
}
