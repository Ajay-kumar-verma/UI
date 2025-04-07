"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/GridLegacy";
import Paper from "@mui/material/Paper";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function App() {
  const [active, setActive] = React.useState({
    Home: false,
    Teachers: false,
    Parents: false,
    Setting: false,
  });

  const iconStyle = {
    cursor: "pointer",
    color: "primary.main",
    "&:hover": {
      color: "secondary.main",
      transform: "scale(1.5)",
    },
    transition: "0.5s",
  };

  return (
    <Item
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid container rowSpacing={1}>
        {["Home", "Teachers", "Parents", "Setting"].map((name) => {
          let HtmlEle = null;
          if (name === "Home")
            HtmlEle = (
                <Person2OutlinedIcon
                  onClick={() =>
                    setActive((state) => ({ ...state, [name]: true }))
                  }
                  sx={{
                    ...iconStyle,
                    color: active[name] ? "secondary.main" : "primary.main",
                    transform: active[name] ? `scale(1.3)` : `scale(1)`,
                    opacity: active[name] ? 1 : 0.5,
                  }}
                />
            );
          if (name === "Teachers")
            HtmlEle = (
                <PeopleOutlineIcon
                  onClick={() =>
                    setActive((state) => ({ ...state, [name]: true }))
                  }
                  sx={{
                    ...iconStyle,
                    color: active[name] ? "secondary.main" : "primary.main",
                    transform: active[name] ? `scale(1.3)` : `scale(1)`,
                    opacity: active[name] ? 1 : 0.5,
                  }}
                />
            );
          if (name === "Parents")
            HtmlEle = (
                <Person4OutlinedIcon
                  onClick={() =>
                    setActive((state) => ({ ...state, [name]: true }))
                  }
                  sx={{
                    ...iconStyle,
                    color: active[name] ? "secondary.main" : "primary.main",
                    transform: active[name] ? `scale(1.3)` : `scale(1)`,
                    opacity: active[name] ? 1 : 0.5,
                  }}
                />
            );
          if (name === "Setting")
            HtmlEle = (
                <SettingsOutlinedIcon
                  onClick={() =>
                    setActive((state) => ({ ...state, [name]: true }))
                  }
                  sx={{
                    ...iconStyle,
                    color: active[name] ? "secondary.main" : "primary.main",
                    transform: active[name] ? `scale(1.3) rotate(120deg)` : `scale(1)`,
                    opacity: active[name] ? 1 : 0.5,
                  }}
                />
            );

          return  <Grid item xs={3}>{HtmlEle} </Grid>


        })}
      </Grid>
    </Item>
  );
}
