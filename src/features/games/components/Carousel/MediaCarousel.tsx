"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "@/components/Carousel/Carousel";
import { slideMargin } from "@/layouts/styles";

const mediaCarouselOptions: CarouselOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      align: "center",
      dragFree: true,
      slidesToScroll: 2,
    },
  },
};

export default function MediaCarousel({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={mediaCarouselOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
