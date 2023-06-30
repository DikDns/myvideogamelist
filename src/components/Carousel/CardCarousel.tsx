"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import useEmblaCarousel from "embla-carousel-react";
import { OptionsType } from "embla-carousel-autoplay/components/Options";

interface CardCarousel {
  children: ReactNode;
  size?: "md" | "lg";
}

const emblaOptionsDefault: Partial<OptionsType> = {
  // @ts-ignore
  align: "center",
  dragFree: true,
  slidesToScroll: 4,
  loop: true,
};

const emblaOptionsMobile: Partial<OptionsType> = {
  // @ts-ignore
  align: "start",
  loop: true,
  dragFree: false,
  slidesToScroll: 1,
};

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
    md: "10%",
  },
  height: { xs: "165px", md: "216px" },
};

export default function CardCarousel({ children, size = "md" }: CardCarousel) {
  const matches = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptionsDefault);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    if (!matches) {
      return emblaApi.reInit(emblaOptionsDefault);
    }

    return emblaApi.reInit(emblaOptionsMobile);
  }, [matches]);

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

      {!matches ? (
        <>
          <Grow in={isHovered}>
            <Fab
              variant="extended"
              onClick={scrollPrev}
              sx={{ position: "absolute", left: "2%", top: "43%" }}
            >
              <KeyboardArrowLeftRounded fontSize="medium" />
            </Fab>
          </Grow>
          <Grow in={isHovered}>
            <Fab
              variant="extended"
              onClick={scrollNext}
              sx={{ position: "absolute", right: "2%", top: "43%" }}
            >
              <KeyboardArrowRightRounded fontSize="medium" />
            </Fab>
          </Grow>
        </>
      ) : (
        ""
      )}
    </Paper>
  );
}
