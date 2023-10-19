"use client";

import { createTheme } from "@mui/material/styles";
import { GoogleOpenSansFont, GoogleRalewayFont } from "@/app/fonts/fonts";

const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ef6a00",
    },
    secondary: {
      main: "#00ef55",
    },
  },
  typography: {
    fontFamily: GoogleOpenSansFont.style.fontFamily,
    h1: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    h2: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    h3: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    h4: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    h5: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    h6: {
      fontFamily: GoogleRalewayFont.style.fontFamily,
    },
    body1: { fontFamily: GoogleOpenSansFont.style.fontFamily },
    body2: { fontFamily: GoogleOpenSansFont.style.fontFamily },
  },
});

export default defaultTheme;
