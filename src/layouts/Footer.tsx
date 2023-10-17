"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container
      component="footer"
      sx={{
        py: 2,
        mt: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="caption">Built with passione by DikDns.</Typography>
    </Container>
  );
}
