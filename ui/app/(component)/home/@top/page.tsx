"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useAppStore } from '../store/useAppStore';
import Chat from "../../chat/page";


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  
  const { drawerOpen,navIndex,setDrawerOpen } = useAppStore();
  return (
    <Container>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <ButtonAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Box sx={{ my: 2 }}>
        {navIndex ===2?<Chat />: [...new Array(navIndex*5)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join("\n")}
      </Box>
    </Container>
  );
}

function ButtonAppBar({ drawerOpen, setDrawerOpen }: { drawerOpen: boolean; setDrawerOpen: (open: boolean) => void }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Name
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => {console.log(drawerOpen);setDrawerOpen(true)}} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
