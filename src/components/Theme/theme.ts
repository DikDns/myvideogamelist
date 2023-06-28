"use client";

import { createTheme } from "@mui/material/styles";
import GoogleInterFont from "@/app/fonts/fonts";

const defaultTheme = createTheme({
  typography: {
    fontFamily: GoogleInterFont.style.fontFamily,
    body1: { fontFamily: GoogleInterFont.style.fontFamily },
    body2: { fontFamily: GoogleInterFont.style.fontFamily },
  },
});

export default defaultTheme;
