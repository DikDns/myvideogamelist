"use client";

import { useState, useCallback, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import useEmblaCarousel from "embla-carousel-react";
import VideoCarouselFAB from "./VideoCarouselFAB";

interface VideoCarousel {
  children: ReactNode;
}

const style = {
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "256px",
  height: "144px",
};

export default function VideoCarousel({ children }: VideoCarousel) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({
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
  });

  return (
    <Paper
      elevation={0}
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <Paper elevation={0} sx={style}>
          {children}
        </Paper>
      </div>

      <VideoCarouselFAB
        emblaApi={emblaApi}
        isHovered={isHovered}
        isMobile={isMobile}
      />
    </Paper>
  );
}
