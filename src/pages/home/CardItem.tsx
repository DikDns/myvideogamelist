"use client";

import Card from "@mui/material/Card";

export default function CardItem({ children }: { children: React.ReactNode }) {
  return (
    <Card
      variant="outlined"
      sx={{
        mx: "8px",
        flex: "0 0 auto",
        minWidth: "0",
        maxWidth: "100%",
        height: "100%",
      }}
    >
      {children}
    </Card>
  );
}
