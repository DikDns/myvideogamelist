"use client";

import { useCallback } from "react";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import { EmblaCarouselType } from "embla-carousel-react";

const ContainerFABStyle = {
  pointerEvents: "none",
  height: "100%",
  width: "100%",
  px: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
};

export default function CardCarouselFAB({
  isMobile,
  isHovered,
  emblaApi,
}: {
  isMobile: boolean;
  isHovered: boolean;
  emblaApi: EmblaCarouselType | undefined;
}) {
  const scrollPrev = useCallback(() => {
    if (!emblaApi || isMobile) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi || isMobile) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box sx={ContainerFABStyle}>
      <Grow in={isHovered}>
        <Fab
          sx={{
            pointerEvents: "auto",
          }}
          aria-label="previous"
          variant="circular"
          onClick={scrollPrev}
        >
          <KeyboardArrowLeftRounded fontSize="medium" />
        </Fab>
      </Grow>
      <Grow in={isHovered}>
        <Fab
          sx={{
            pointerEvents: "auto",
          }}
          aria-label="next"
          variant="circular"
          color="default"
          onClick={scrollNext}
        >
          <KeyboardArrowRightRounded fontSize="medium" />
        </Fab>
      </Grow>
    </Box>
  );
}
