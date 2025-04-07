"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export default function App() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={10}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          console.log({ event, newValue });
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Person2OutlinedIcon />} />
        <BottomNavigationAction label="Teachers" icon={<PeopleOutlineIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="Setting"
          icon={<SettingsOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
