"use client";

import { SearchParams } from "@/types/SearchParams";
import Container from "@mui/material/Container";

export default function Search({ searchParam }: { searchParam: SearchParams }) {
  return (
    <Container component="main" sx={{ mt: 10 }}>
      {searchParam.q}
    </Container>
  );
}
