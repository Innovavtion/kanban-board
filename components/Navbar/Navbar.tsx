"use client";

import { useState } from "react";

// Components Navbar
import NavbarInput from "./NavbarInput";
import NavbarDrawer from "./NavbarDrawer";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarListLink from "./NavbarListLink";
import NavbarListLinkItem from "./NavbarListLinkItem";

// Components Mui
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

// Icons Mui
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

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

  // Open Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 50, boxShadow: 0 }}>
        <Toolbar sx={{ mt: -0.85 }}>
          <Typography sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              aria-label="open drawer"
              onClick={() => drawerOpen(open)}
              sx={{ minWidth: 5 }}
            >
              <MenuIcon />
            </Button>
            <NavbarLogo />
            <NavbarListLink text="Рабочие пространства" assignment="work" />
            <NavbarListLink text="Недавние" assignment="recent">
              <NavbarListLinkItem />
              <NavbarListLinkItem />
            </NavbarListLink>
            <NavbarListLink text="В избранном" assignment="favorite" />
          </Typography>
          <NavbarInput />
          <IconButton color="inherit" onClick={handleClick}>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavbarDrawer
        mode={mode}
        setMode={setMode}
        open={open}
        drawerOpen={drawerOpen}
      />
      <NavbarMenu
        anchorEl={anchorEl}
        openMenu={openMenu}
        handleClose={handleClose}
        mode={mode}
        setMode={setMode}
      />
    </Box>
  );
}
