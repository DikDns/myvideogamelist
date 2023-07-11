"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { VideoGame } from "@/types/VideoGameType";

const h4Style = {
  fontSize: {
    xs: "1.25rem",
    sm: "2rem",
    md: "2.5rem",
  },
};

export default function NewTrailers({ data }: { data: VideoGame[] }) {
  return (
    <Container sx={{ overflow: "hidden", my: 10 }}>
      <Typography sx={h4Style} variant="h4" mb={2}>
        {`New Release`}
      </Typography>
    </Container>
  );
}
