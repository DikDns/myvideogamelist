import * as React from "react";
import ThemeRegistry from "@/services/Theme/ThemeRegistry";
import SearchAppBar from "@/layouts/SearchAppBar";
import Footer from "@/layouts/Footer";
import ClerkAuth from "@/features/authentication/providers/ClerkAuth";

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
    <ClerkAuth>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <SearchAppBar>{children}</SearchAppBar>
            <Footer />
          </ThemeRegistry>
        </body>
      </html>
    </ClerkAuth>
  );
}
