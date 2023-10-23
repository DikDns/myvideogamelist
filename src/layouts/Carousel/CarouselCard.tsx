"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "./Carousel";
import slideMargin from "./slideMargin";

const carouselCardOptions: CarouselOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      loop: false,
      dragFree: true,
      slidesToScroll: 4,
    },
  },
};

export default function CarouselCard({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={carouselCardOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
