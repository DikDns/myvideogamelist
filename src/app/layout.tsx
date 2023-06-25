import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import ChakraUIProvider from "@/providers/ChakraUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MyVideoGameList",
  description:
    "Welcome to MyVideoGameList, the world's most active online video games community and database. Join the online community, create your video game list.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <ChakraUIProvider>{children}</ChakraUIProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
