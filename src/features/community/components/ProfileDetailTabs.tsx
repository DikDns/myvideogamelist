"use client";

import * as React from "react";
import MUITabs from "@mui/material/Tabs";
import MUITab from "@mui/material/Tab";
import MUITypography from "@mui/material/Typography";
import MUIBox from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <MUIBox sx={{ p: 3 }}>
          <MUITypography>{children}</MUITypography>
        </MUIBox>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProfileDetailTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MUIBox sx={{ width: "100%" }}>
      <MUIBox sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MUITabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <MUITab label="Followers" {...a11yProps(0)} />
          <MUITab label="Following" {...a11yProps(1)} />
        </MUITabs>
      </MUIBox>
      <CustomTabPanel value={value} index={0}>
        Followers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Following
      </CustomTabPanel>
    </MUIBox>
  );
}
