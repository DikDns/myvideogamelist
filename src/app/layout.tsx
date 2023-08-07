import * as React from "react";
import ThemeRegistry from "@/components/Theme/ThemeRegistry";
import SearchAppBar from "@/components/Navigation/SearchAppBar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata = {
  referrer: "origin-when-cross-origin",
  keywords: ["MVGL", "My Video Game List", "Video Game Tracker"],
  authors: [{ name: "DikDns", url: "https://linktr.ee/dikdns" }],
  colorScheme: "dark",
  creator: "DikDns",
  publisher: "DikDns",
  title: {
    template: "%s | MVGL",
    default: "MyVideoGameList",
  },
  description:
    "Welcome to MyVideoGameList, the world's most active online video games community and database. Join the online community, create your video game list. Now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <SearchAppBar>{children}</SearchAppBar>
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
