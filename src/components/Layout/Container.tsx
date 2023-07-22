"use client";

import { ReactNode } from "react";
import Container from "@mui/material/Container";

export default function ContainerLayout({ children }: { children: ReactNode }) {
  return <Container sx={{ mt: 10, overflow: "hidden" }}>{children}</Container>;
}
