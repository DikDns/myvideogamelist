"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import useEmblaCarousel from "embla-carousel-react";

export default function CardCarousel({ children }: { children: ReactNode }) {
  const matches = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    slidesToScroll: 4,
    loop: true,
  });
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
      return emblaApi.reInit({
        align: "start",
        loop: true,
        dragFree: true,
        slidesToScroll: 4,
      });
    }

    return emblaApi.reInit({
      align: "start",
      loop: true,
      dragFree: false,
      slidesToScroll: 1,
    });
  }, [matches]);

  return (
    <Paper
      elevation={0}
      sx={{ position: "relative" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ overflow: "hidden" }} ref={emblaRef}>
        <Paper
          elevation={0}
          sx={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: {
              xs: "175px",
              md: "25%",
            },
            height: { xs: "250px", md: "374px" },
          }}
        >
          {children}
        </Paper>
      </div>

      {!matches ? (
        <>
          <Grow in={isHovered}>
            <Fab
              variant="extended"
              onClick={scrollPrev}
              sx={{ position: "absolute", left: "10px", top: "42%" }}
            >
              <KeyboardArrowLeftRounded fontSize="large" />
            </Fab>
          </Grow>
          <Grow in={isHovered}>
            <Fab
              variant="extended"
              onClick={scrollNext}
              sx={{ position: "absolute", right: "10px", top: "42%" }}
            >
              <KeyboardArrowRightRounded fontSize="large" />
            </Fab>
          </Grow>
        </>
      ) : (
        ""
      )}
    </Paper>
  );
}
