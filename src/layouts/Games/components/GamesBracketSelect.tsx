"use client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const brackets = {
  topRated: "top-rated",
  topNewReleases: "top-new-releases",
  topUpcoming: "top-upcoming",
  newReleases: "new-releases",
};

export default function GamesBracketSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="bracket-select-label">Bracket</InputLabel>
        <Select
          labelId="bracket-select-label"
          id="bracket-select"
          value={value}
          label="Bracket"
          onChange={onChange}
        >
          <MenuItem
            disabled={value === brackets.topRated}
            value={brackets.topRated}
          >
            Top Rated
          </MenuItem>
          <MenuItem
            disabled={value === brackets.topNewReleases}
            value={brackets.topNewReleases}
          >
            Top New Releases
          </MenuItem>
          <MenuItem
            disabled={value === brackets.topUpcoming}
            value={brackets.topUpcoming}
          >
            Top Upcoming
          </MenuItem>
          <MenuItem
            disabled={value === brackets.newReleases}
            value={brackets.newReleases}
          >
            New Releases
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
