"use client";

import { useApp } from "./Drawer/AppMenu/useApp";
import { useAdaptiveMenu } from "./Drawer/AdaptiveMenu/useAdaptiveMenu";

import RightSection from "./Section/RightSection";
import LeftSection from "./Section/LeftSection";
import DrawerApp from "./Drawer/AppMenu/App";
import DrawerAdaptiveMenu from "./Drawer/AdaptiveMenu/AdaptiveMenu";

import { AppBar, Box, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "64px",
  paddingX: "24px",
}));

type Props = {
  mode: boolean;
  setMode: (mode: boolean) => void;
  size: number;
};

export default function Navbar({ mode, setMode, size }: Props) {
  const { open, drawerOpen } = useApp();
  const { openAdaptiveMenu, drawerOpenAdaptiveMenu } = useAdaptiveMenu();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ height: 50, boxShadow: 0 }} position="static">
        <CustomToolbar sx={{ mt: -0.85 }}>
          <LeftSection
            navbarSize={size}
            openAdaptiveMenu={openAdaptiveMenu}
            drawerOpenAdaptiveMenu={drawerOpenAdaptiveMenu}
          />
          <RightSection navbarSize={size} open={open} drawerOpen={drawerOpen} />
        </CustomToolbar>
        <DrawerApp
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
