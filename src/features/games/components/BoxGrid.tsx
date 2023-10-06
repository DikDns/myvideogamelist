"use client";

import MUIBox from "@mui/material/Box";
import MUITypography from "@mui/material/Typography";
import MUIStack from "@mui/material/Stack";
import { SxProps } from "@mui/material/styles";

export default function GameRelatedContentBoxGrid({
  label,
  children,
  sx,
  direction = "column",
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  sx?: SxProps;
  direction?: "column" | "row";
}) {
  return direction === "row" ? (
    <MUIStack sx={{ ...sx }}>
      <MUITypography variant="body1">
        <span
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: 2,
          }}
        >
          <span>{label}</span>
          <span>:</span>
        </span>
      </MUITypography>
      <MUIStack>{children}</MUIStack>
    </MUIStack>
  ) : (
    <MUIBox
      sx={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "start",
        gap: 1,
        ...sx,
      }}
    >
      <MUITypography variant="body1">
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{label}</span>
          <span>:</span>
        </span>
      </MUITypography>
      <MUITypography variant="body1">{children}</MUITypography>
    </MUIBox>
  );
}
