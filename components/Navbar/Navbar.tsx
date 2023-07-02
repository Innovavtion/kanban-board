"use client";

import { useState } from "react";

// Components Navbar
import NavbarSearch from "./NavbarSearch";
import NavbarDrawer from "./NavbarDrawer";
import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarSubmenuItem from "./NavbarSubmenuItem";
import NavbarSubmenuTemplates from "./NavbarSubmenuTemplates";

// Components Mui
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

// Icons Mui
import AppsIcon from "@mui/icons-material/Apps";

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 50, boxShadow: 0 }}>
        <Toolbar sx={{ mt: -0.85 }}>
          <Typography sx={{ flexGrow: 1 }}>
            <NavbarLogo />
            <NavbarMenuItem text="Рабочие пространства" assignment="work" />
            <NavbarMenuItem text="Недавние" assignment="recent">
              <NavbarSubmenuItem />
              <NavbarSubmenuItem />
            </NavbarMenuItem>
            <NavbarMenuItem text="В избранном" assignment="favorite" />
            <NavbarMenuItem text="Шаблоны" assignment="favorite">
              <NavbarSubmenuTemplates />
            </NavbarMenuItem>
          </Typography>
          <NavbarSearch />
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={() => drawerOpen(open)}
            sx={{ minWidth: 5, px: "14px" }}
          >
            <AppsIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <NavbarDrawer
        mode={mode}
        setMode={setMode}
        open={open}
        drawerOpen={drawerOpen}
      />
    </Box>
  );
}
