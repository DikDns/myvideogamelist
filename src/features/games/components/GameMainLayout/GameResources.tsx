"use client";

import NextImage from "next/image";
import NextLink from "next/link";
import { useContext } from "react";
import MUITypography from "@mui/material/Typography";
import MUIStack from "@mui/material/Stack";
import MUILink from "@mui/material/Link";
import { getWebsiteIconUrl } from "@/lib/igdb";
import { SxProps } from "@mui/material/styles";
import { GameContext } from "../GameLayout";

export const h3: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
  fontWeight: "500",
  letterSpacing: "0.5px",
};

export default function GameResources() {
  const game = useContext(GameContext);

  return game?.websites ? (
    <MUIStack mt={2}>
      <MUITypography variant="h3" sx={h3} mb={1}>
        Resources
      </MUITypography>
      <MUIStack gap={1} sx={{ flexDirection: { md: "row" }, flexWrap: "wrap" }}>
        {game.websites.map((website) => {
          if (!website.category) return;
          const { title, url } = getWebsiteIconUrl(website.category);
          return (
            <MUILink
              key={website.id}
              target="_blank"
              href={website.url}
              component={NextLink}
              width="fit-content"
            >
              <MUIStack direction="row" alignItems="center" gap={1}>
                <NextImage
                  src={url}
                  alt={title}
                  title={title}
                  width={32}
                  height={32}
                />
                {title.substring(0, title.length - 5)}
              </MUIStack>
            </MUILink>
          );
        })}
      </MUIStack>
    </MUIStack>
  ) : (
    ""
  );
}
