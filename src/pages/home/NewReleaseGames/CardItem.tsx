"use client";

import Card from "@mui/material/Card";

const cardStyle = {
  mx: "8px",
  flex: "0 0 auto",
  minWidth: "0",
  maxWidth: "100%",
  height: "100%",
};

export default function CardItem({ children }: { children: React.ReactNode }) {
  return (
    <Card variant="outlined" sx={cardStyle}>
      {children}
    </Card>
  );
}
