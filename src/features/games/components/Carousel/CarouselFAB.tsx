"use client";

import { useCallback } from "react";
import IMKeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import IMKeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import MUIBox from "@mui/material/Box";
import MUIFab from "@mui/material/Fab";
import MUIGrow from "@mui/material/Grow";
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
    <MUIBox sx={ContainerFABStyle}>
      <MUIGrow in={isHovered}>
        <MUIFab
          sx={{
            pointerEvents: "auto",
          }}
          aria-label="previous"
          variant="circular"
          onClick={scrollPrev}
        >
          <IMKeyboardArrowLeftRounded fontSize="medium" />
        </MUIFab>
      </MUIGrow>
      <MUIGrow in={isHovered}>
        <MUIFab
          sx={{
            pointerEvents: "auto",
          }}
          aria-label="next"
          variant="circular"
          color="default"
          onClick={scrollNext}
        >
          <IMKeyboardArrowRightRounded fontSize="medium" />
        </MUIFab>
      </MUIGrow>
    </MUIBox>
  );
}
