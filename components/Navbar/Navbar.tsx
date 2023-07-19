"use client";

import { useState, useRef, useEffect } from "react";

import NavbarRightSection from "./Section/NavbarRightSection";
import NavbarLeftSection from "./Section/NavbarLeftSection";
import Drawer from "./Drawer/Drawer";
import DrawerAdaptiveMenu from "./Drawer/DrawerAdaptiveMenu";

import { AppBar, Box, Toolbar } from "@mui/material";

type Props = {
  mode: boolean;
  setMode: (mode: boolean) => void;
};

export default function Navbar({ mode, setMode }: Props) {
  // Open Drawer
  const [open, setOpen] = useState(false);

  const drawerOpen = (open: boolean) => {
    setOpen(!open);
  };

  // Open Adaptive Menu
  const [openAdaptiveMenu, setOpenAdaptiveMenu] = useState(false);

  const drawerOpenAdaptiveMenu = (openAdaptiveMenu: boolean) => {
    setOpenAdaptiveMenu(!openAdaptiveMenu);
  };

  // Adaptive navbar
  const navbarRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState<object>({});

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = navbarRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} ref={navbarRef}>
      <AppBar position="static" sx={{ height: 50, boxShadow: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: -0.85,
            minHeight: "64px",
            paddingX: "24px",
          }}
        >
          <NavbarLeftSection
            navbarSize={size}
            openAdaptiveMenu={openAdaptiveMenu}
            drawerOpenAdaptiveMenu={drawerOpenAdaptiveMenu}
          />
          <NavbarRightSection
            navbarSize={size}
            open={open}
            drawerOpen={drawerOpen}
          />
        </Toolbar>
        <Drawer
          mode={mode}
          setMode={setMode}
          open={open}
          drawerOpen={drawerOpen}
        />
        <DrawerAdaptiveMenu
          openAdaptiveMenu={openAdaptiveMenu}
          drawerOpenAdaptiveMenu={drawerOpenAdaptiveMenu}
          navbarSize={size}
        />
      </AppBar>
    </Box>
  );
}
