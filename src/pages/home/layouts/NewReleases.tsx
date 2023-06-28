"use client";

import Image from "next/image";
import { useCallback } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowLeftRounded from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface NewReleaseData {
  id: number;
  name: string;
  cover: {
    id: number;
    image_id: string;
  };
}

function setCards(data: NewReleaseData[]) {
  return data.map((dt, i) => (
    <Card
      variant="outlined"
      key={dt.id}
      sx={{ mx: "10px", flex: "0 0 auto", minWidth: "0", maxWidth: "100%" }}
    >
      <Image
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${dt.cover.image_id}.jpg`}
        alt={`${dt.name} cover`}
        width={200}
        height={300}
        loading="eager"
      />
    </Card>
  ));
}

export default function NewReleases({ data }: { data: NewReleaseData[] }) {
  const matches = useMediaQuery("(max-width:600px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Container style={{ overflow: "hidden" }}>
      <Typography variant="h3">{`New Release Video Games`}</Typography>
      <div style={{ position: "relative" }}>
        <div style={{ overflow: "hidden" }} ref={emblaRef}>
          <div style={{ display: "flex" }}>{setCards(data)}</div>
        </div>
        {matches ? (
          ""
        ) : (
          <>
            {" "}
            <Button
              color="primary"
              variant="contained"
              onClick={scrollPrev}
              sx={{ position: "absolute", left: "10px", top: "130px" }}
            >
              <KeyboardArrowLeftRounded fontSize="large" />
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={scrollNext}
              sx={{ position: "absolute", right: "10px", top: "130px" }}
            >
              <KeyboardArrowRightRounded fontSize="large" />
            </Button>{" "}
          </>
        )}
      </div>
    </Container>
  );
}
