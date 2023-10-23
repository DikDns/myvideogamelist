"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "./Carousel";
import slideMargin from "./slideMargin";

const carouselMediaOptions: CarouselOptions = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      loop: false,
      dragFree: true,
      slidesToScroll: 2,
    },
  },
};

export default function CarouselMedia({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={carouselMediaOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
