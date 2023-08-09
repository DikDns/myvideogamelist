"use client";

import Image from "next/image";
import NextLink from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { getWebsiteIconUrl } from "@/lib/igdb";
import { h3 } from "@/layouts/styles";
import { Game } from "@/types/Game";

export default function GameResources({ game }: { game: Game }) {
  return game.websites ? (
    <Stack mt={2}>
      <Typography variant="h3" sx={h3} mb={1}>
        Resources
      </Typography>
      <Stack gap={1} sx={{ flexDirection: { md: "row" }, flexWrap: "wrap" }}>
        {game.websites.map((website) => {
          if (!website.category) return;
          const { title, url } = getWebsiteIconUrl(website.category);
          return (
            <Link
              key={website.id}
              target="_blank"
              href={website.url}
              component={NextLink}
              width="fit-content"
            >
              <Stack direction="row" alignItems="center" gap={1}>
                <Image
                  src={url}
                  alt={title}
                  title={title}
                  width={32}
                  height={32}
                />
                {title.substring(0, title.length - 5)}
              </Stack>
            </Link>
          );
        })}
      </Stack>
    </Stack>
  ) : (
    ""
  );
}
