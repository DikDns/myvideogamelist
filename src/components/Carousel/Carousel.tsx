"use client";

import { useState, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { SxProps } from "@mui/material/styles";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import CarouselFAB from "./CarouselFAB";

export type CarouselOptions = EmblaOptionsType;

export type Carousel = {
  slides: ReactNode[];
  sxSlide?: SxProps;
  options?: CarouselOptions;
};

function setCarouselSlides(slides: ReactNode[], sx?: SxProps) {
  return slides.map((slide, i) => (
    <Card
      key={slide?.toString()}
      variant="outlined"
      sx={{
        flex: "0 0 auto",
        minWidth: "0",
        maxWidth: "100%",
        ...sx,
      }}
    >
      {slide}
    </Card>
  ));
}

export default function Carousel({ slides, options, sxSlide }: Carousel) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <Box sx={{ display: "flex" }}>{setCarouselSlides(slides, sxSlide)}</Box>
      </div>

      <CarouselFAB
        emblaApi={emblaApi}
        isHovered={isHovered}
        isMobile={isMobile}
      />
    </Box>
  );
}
