"use client";

import { ReactNode } from "react";
import Carousel, { CarouselOptions } from "@/components/Carousel/Carousel";

const headlineCarouselOptions: CarouselOptions = {
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

const headlineSlideStyle = {
  mx: "8px",
};

export default function HeadlineCarousel({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={headlineCarouselOptions}
      slides={slides}
      sxSlide={headlineSlideStyle}
    />
  );
}
