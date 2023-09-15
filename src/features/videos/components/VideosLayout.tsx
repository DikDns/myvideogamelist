"use client";

import MUIContainer from "@mui/material/Container";
import Breadcrumbs from "@/layouts/Breadcrumbs";
import VideosHeader from "@/features/videos/components/VideosHeader";
import VideosInfiniteLoad from "@/features/videos/components/VideosInfiniteLoad";

export default function VideosLayout() {
  return (
    <MUIContainer>
      <Breadcrumbs />

      <VideosHeader />

      <VideosInfiniteLoad />
    </MUIContainer>
  );
}
