"use client";

import MUIContainer from "@mui/material/Container";
import ListHeading from "./ListHeading";
import ListTable from "./ListTable";

export default function ListUserLayout() {
  return (
    <MUIContainer>
      <ListHeading />

      <ListTable />
    </MUIContainer>
  );
}
