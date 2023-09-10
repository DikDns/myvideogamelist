"use client";

import Container from "@mui/material/Container";
import Nav from "@/services/api-videos/components/Nav";
import Header from "@/services/api-videos/components/Header";
import InfiniteVideos from "@/services/api-videos/components/InfiniteVideos";

export default function Videos() {
  return (
    <Container>
      <Nav />

      <Header />

      <InfiniteVideos />
    </Container>
  );
}
