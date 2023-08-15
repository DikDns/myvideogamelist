"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "@/components/Carousel/Carousel";
import { slideMargin } from "@/layouts/styles";

const profileCarouselOptions: CarouselOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      dragFree: true,
    },
  },
};

export default function ProfileCarousel({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={profileCarouselOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
