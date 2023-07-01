"use client";

import { useState, useCallback, ReactNode } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import useEmblaCarousel from "embla-carousel-react";

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
  const matches = useMediaQuery("(max-width:600px)");
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
