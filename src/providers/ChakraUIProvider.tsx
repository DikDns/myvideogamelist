"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    700: "#C2550F",
    600: "#DE7914",
    500: "#FAA019",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors });

export default function ChakraUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
