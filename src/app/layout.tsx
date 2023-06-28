import * as React from "react";
import ThemeRegistry from "@/components/Theme/ThemeRegistry";
import SessionProvider from "@/components/NextAuth/SessionProvider";

export const metadata = {
  title: "MyVideoGameList",
  description:
    "Welcome to MyVideoGameList, the world's most active online video games community and database. Join the online community, create your video game list. Now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}
