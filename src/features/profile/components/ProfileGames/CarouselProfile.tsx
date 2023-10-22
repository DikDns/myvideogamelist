"use client";

import { ReactNode } from "react";
import Carousel, {
  CarouselOptions,
} from "../../../../layouts/Carousel/Carousel";
import slideMargin from "../../../../layouts/Carousel/slideMargin";

const profileCarouselOptions: CarouselOptions = {
  loop: false,
  align: "start",
  slidesToScroll: 1,
  breakpoints: {
    "(min-width: 600px)": {
      dragFree: true,
    },
  },
};

export default function CarouselProfile({ slides }: { slides: ReactNode[] }) {
  return (
    <Carousel
      options={profileCarouselOptions}
      slides={slides}
      sxSlide={slideMargin}
    />
  );
}
