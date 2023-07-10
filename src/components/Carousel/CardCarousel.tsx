"use client";

import { useState, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import useEmblaCarousel from "embla-carousel-react";
import CardCarouselFAB from "./CardCarouselFAB";

interface CardCarousel {
  children: ReactNode;
  size?: "md" | "lg";
}

const lgStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: {
    xs: "176px",
    md: "25%",
  },
  height: { xs: "248px", md: "374px" },
};

const mdStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: {
    xs: "115px",
    md: "15%",
  },
};

export default function CardCarousel({ children, size = "md" }: CardCarousel) {
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Paper
      elevation={0}
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <Paper elevation={0} sx={size === "lg" ? lgStyle : mdStyle}>
          {children}
        </Paper>
      </div>

      <CardCarouselFAB
        emblaApi={emblaApi}
        isHovered={isHovered}
        isMobile={isMobile}
      />
    </Paper>
  );
}
