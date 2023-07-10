import { useCallback } from "react";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import { EmblaCarouselType } from "embla-carousel-react";

export default function VideoCarouselFAB({
  isMobile,
  isHovered,
  emblaApi,
}: {
  isMobile: boolean;
  isHovered: boolean;
  emblaApi: EmblaCarouselType | undefined;
}) {
  if (!emblaApi || isMobile) return;

  const scrollPrev = useCallback(() => {
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <Grow in={isHovered}>
        <Fab
          aria-label="previous"
          variant="circular"
          onClick={scrollPrev}
          sx={{ position: "absolute", left: "2%", top: "32%" }}
        >
          <KeyboardArrowLeftRounded fontSize="medium" />
        </Fab>
      </Grow>
      <Grow in={isHovered}>
        <Fab
          aria-label="next"
          variant="circular"
          onClick={scrollNext}
          sx={{ position: "absolute", right: "2%", top: "32%" }}
        >
          <KeyboardArrowRightRounded fontSize="medium" />
        </Fab>
      </Grow>
    </>
  );
}
