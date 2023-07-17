"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "@/components/Carousel/Carousel";
import { slideMargin } from "@/layouts/styles";

const cardCarouselOptions: CarouselOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      align: "center",
      dragFree: true,
      slidesToScroll: 4,
    },
  },
};

export default function CardCarousel({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={cardCarouselOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
