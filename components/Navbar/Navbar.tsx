"use client";

import { useState, useRef, useEffect } from "react";

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
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

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

  // Adaptive navbar
  const navbarRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState<any>({});

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = navbarRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    console.log(navbarRef.current?.offsetWidth);
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} ref={navbarRef}>
      <AppBar position="static" sx={{ height: 50, boxShadow: 0 }}>
        <Toolbar sx={{ mt: -0.85 }}>
          <Typography sx={{ flexGrow: 1 }}>
            {size.clientWidth >= 1100 ? (
              <>
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
                <Button
                  aria-label="create border"
                  sx={{
                    color: "inherit",
                    minWidth: 5,
                    px: "14px",
                    py: "3.5px",
                    ml: "5px",
                    backgroundColor: "#23bf0b",
                    textTransform: "none",
                    fontSize: 14,
                    ":hover": { backgroundColor: "#4cf233" },
                  }}
                >
                  Создать
                </Button>
              </>
            ) : (
              <Button
                color="inherit"
                aria-label="create border"
                sx={{
                  minWidth: 5,
                  px: "14px",
                  py: "3.5px",
                  ml: "5px",
                }}
              >
                <DensityMediumIcon />
              </Button>
            )}
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
        <NavbarDrawer
          mode={mode}
          setMode={setMode}
          open={open}
          drawerOpen={drawerOpen}
        />
      </AppBar>
    </Box>
  );
}
