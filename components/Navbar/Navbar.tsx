"use client";

import { useApp } from "./Drawer/AppMenu/useApp";
import { useAdaptiveMenu } from "./Drawer/AdaptiveMenu/useAdaptiveMenu";

import RightSection from "./Section/RightSection";
import LeftSection from "./Section/LeftSection";
import DrawerApp from "./Drawer/AppMenu/App";
import DrawerAdaptiveMenu from "./Drawer/AdaptiveMenu/AdaptiveMenu";

import { AppBar, Box, Toolbar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  minHeight: "49.5px",
  maxHeight: "49.5px",
  "@media (min-width: 600px)": {
    minHeight: "49.5px",
    maxHeight: "49.5px",
  },
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
    <Box sx={{ flexGrow: 1, top: 0, position: "sticky", zIndex: 10 }}>
      <AppBar sx={{ boxShadow: 0, backgroundImage: "none" }} position="static">
        <CustomToolbar>
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
