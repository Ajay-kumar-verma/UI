"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useAppStore } from "./store/useAppStore";

export default function App() {
  const { navIndex, setNavIndex } = useAppStore();
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={10}
    >
      <BottomNavigation
        showLabels
        value={navIndex}
        sx={{ backgroundColor: "#fff" }}
        onChange={(event, newValue) => {
          setNavIndex(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<Person2OutlinedIcon />} />
        <BottomNavigationAction label="Teachers" icon={<PeopleOutlineIcon />} />
        <BottomNavigationAction label="Chat" icon={<ForumOutlinedIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction
          label="Setting"
          icon={<SettingsOutlinedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
