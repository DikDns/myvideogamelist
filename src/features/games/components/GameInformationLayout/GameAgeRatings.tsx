"use client";

import Image from "next/image";
import igdbAgeRating from "../../lib/igdbAgeRating";
import AgeRating from "../../types/AgeRating";

function AgeRatingImage({ url, title }: { url: string; title: string }) {
  return <Image src={url} alt={title} width={48} height={48} />;
}

export default function GameAgeRatings({
  ageRatings,
}: {
  ageRatings: AgeRating[];
}) {
  return ageRatings.map((ageRating) => {
    if (!ageRating.rating) return;
    const { url, title } = igdbAgeRating(ageRating.rating);
    return <AgeRatingImage key={ageRating.id} url={url} title={title} />;
  });
}
