"use client";

import { useState, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MUICard from "@mui/material/Card";
import MUIBox from "@mui/material/Box";
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
  return slides.map((slide, index) => {
    const key = index * Math.random();
    return (
      <MUICard
        key={key.toString(36).substring(2, 9)}
        variant="outlined"
        sx={{
          flex: "0 0 auto",
          minWidth: "0",
          maxWidth: "100%",
          ...sx,
        }}
      >
        {slide}
      </MUICard>
    );
  });
}

export default function Carousel({ slides, options, sxSlide }: Carousel) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <MUIBox
      sx={{ position: "relative" }}
      onMouseEnter={() => (!isMobile ? setIsHovered(true) : false)}
      onMouseLeave={() => (!isMobile ? setIsHovered(false) : false)}
    >
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <MUIBox sx={{ display: "flex" }}>
          {setCarouselSlides(slides, sxSlide)}
        </MUIBox>
      </div>

      <CarouselFAB
        emblaApi={emblaApi}
        isHovered={isHovered}
        isMobile={isMobile}
      />
    </MUIBox>
  );
}
