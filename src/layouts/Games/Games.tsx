"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export function BracketFetchSelect() {
  const [bracketFetch, setBracketFetch] = React.useState("top-rated");

  const handleChange = (event: SelectChangeEvent) => {
    setBracketFetch(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bracket</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bracketFetch}
          label="Bracket"
          onChange={handleChange}
        >
          <MenuItem value={"top-rated"}>Top Rated</MenuItem>
          <MenuItem value={"top-new-releases"}>Top New Releases</MenuItem>
          <MenuItem value={"top-upcoming"}>Top Upcoming</MenuItem>
          <MenuItem value={"new-releases"}>New Releases</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function Games() {
  return (
    <Container sx={{ mt: 10 }}>
      <BracketFetchSelect />
    </Container>
  );
}
