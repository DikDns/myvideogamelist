"use client";

import NextImage from "next/image";
import { getImageUrl } from "@/lib/igdb";

export default function GameCover({
  imageId,
  alt,
}: {
  imageId?: string | null;
  alt?: string | null;
}) {
  return (
    <NextImage
      src={getImageUrl(imageId || "", "cover_small", "2x")}
      alt={`${alt} Cover`}
      width={45}
      height={68}
    />
  );
}
