"use client";

import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";

export default function SearchLoading() {
  return (
    <Container sx={{ mt: 7 }}>
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
      <Skeleton sx={{ width: "100%", height: "125px" }} />
    </Container>
  );
}
