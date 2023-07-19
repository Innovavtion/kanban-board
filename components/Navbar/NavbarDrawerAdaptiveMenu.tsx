"use client";

import { useEffect } from "react";

// Custom Components
import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarSubmenuItem from "./NavbarSubmenuItem";
import NavbarSubmenuTemplates from "./NavbarSubmenuTemplates";

// Components Mui
import { Drawer, IconButton, Divider, Button, Box } from "@mui/material";

// Theme Mui
import { useTheme, styled } from "@mui/material/styles";

// Icons Mui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerCustom = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    display: "flex",
    boxSizing: "border-box",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 2),
}));

type Props = {
  openAdaptiveMenu: boolean;
  drawerOpenAdaptiveMenu: (openAdaptiveMenu: boolean) => void;
  navbarSize: { clientWidth?: number; clientHeight?: number };
};

export default function NavbarDrawerAdaptiveMenu({
  openAdaptiveMenu,
  drawerOpenAdaptiveMenu,
  navbarSize,
}: Props) {
  const theme = useTheme();
  const drawerWidth: number | undefined = navbarSize.clientWidth;

  const removeOpenAdaptiveMenu = () => {
    if (
      drawerWidth != undefined &&
      drawerWidth > 1100 &&
      openAdaptiveMenu === true
    ) {
      drawerOpenAdaptiveMenu(openAdaptiveMenu);
    }
  };

  useEffect(() => {
    removeOpenAdaptiveMenu();
  });

  return (
    <DrawerCustom
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="left"
      open={openAdaptiveMenu}
    >
      <DrawerHeader
        sx={{
          "@media (min-width: 200px)": {
            minHeight: "49px",
          },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavbarLogo />
        <IconButton
          onClick={() => drawerOpenAdaptiveMenu(openAdaptiveMenu)}
          color="inherit"
        >
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ p: 0 }} />
          ) : (
            <ChevronRightIcon sx={{ p: 0 }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "275px",
        }}
      >
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
            minWidth: 200,
            px: "14px",
            py: "3.5px",
            backgroundColor: "#23bf0b",
            textTransform: "none",
            fontSize: 14,
            ":hover": { backgroundColor: "#4cf233" },
          }}
        >
          Создать
        </Button>
      </Box>
    </DrawerCustom>
  );
}
