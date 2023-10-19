"use client";

import MUIBox from "@mui/material/Box";
import MUIInputLabel from "@mui/material/InputLabel";
import MUIMenuItem from "@mui/material/MenuItem";
import MUIFormControl from "@mui/material/FormControl";
import MUISelect, { SelectProps } from "@mui/material/Select";

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
  onChange: SelectProps<string>["onChange"];
}) {
  return (
    <MUIBox sx={{ minWidth: 120 }}>
      <MUIFormControl fullWidth>
        <MUIInputLabel id="bracket-select-label">Bracket</MUIInputLabel>
        <MUISelect
          labelId="bracket-select-label"
          id="bracket-select"
          value={value}
          label="Bracket"
          onChange={onChange}
        >
          <MUIMenuItem
            disabled={value === brackets.topRated}
            value={brackets.topRated}
          >
            Top Rated
          </MUIMenuItem>
          <MUIMenuItem
            disabled={value === brackets.topNewReleases}
            value={brackets.topNewReleases}
          >
            Top New Releases
          </MUIMenuItem>
          <MUIMenuItem
            disabled={value === brackets.topUpcoming}
            value={brackets.topUpcoming}
          >
            Top Upcoming
          </MUIMenuItem>
          <MUIMenuItem
            disabled={value === brackets.newReleases}
            value={brackets.newReleases}
          >
            New Releases
          </MUIMenuItem>
        </MUISelect>
      </MUIFormControl>
    </MUIBox>
  );
}
