"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "@/components/Carousel/Carousel";
import { slideMargin } from "@/layouts/styles";

const videoHomeCarouselOptions: CarouselOptions = {
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

export default function VideoHomeCarousel({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={videoHomeCarouselOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
