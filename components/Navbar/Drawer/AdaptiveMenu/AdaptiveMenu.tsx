"use client";

import { useEffect } from "react";

// Custom Components
import Logo from "../../Elements/Logo";
import MenuItem from "../../Elements/MenuItem";
import SubmenuItem from "../../Submenu/SubmenuItem";
import SubmenuTemplates from "../../Submenu/SubmenuTemplates";

// Components Mui
import { Drawer, IconButton, Divider, Button, Box } from "@mui/material";

// Theme Mui
import { useTheme, styled } from "@mui/material/styles";

// Icons Mui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const DrawerCustom = styled(Drawer)(() => ({
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    display: "flex",
    boxSizing: "border-box",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 2),
  "@media (min-width: 200px)": {
    minHeight: "49px",
  },
}));

const BoxCustom = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  height: "275px",
}));

const ButtonCreate = styled(Button)(() => ({
  color: "inherit",
  minWidth: 150,
  px: "14px",
  py: "3.5px",
  backgroundColor: "#23bf0b",
  textTransform: "none",
  fontSize: 14,
  ":hover": { backgroundColor: "#4cf233" },
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
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="left"
      open={openAdaptiveMenu}
    >
      <DrawerHeader>
        <Logo />
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
      <BoxCustom>
        <MenuItem text="Рабочие пространства" assignment="work" />
        <MenuItem text="Недавние" assignment="recent">
          <SubmenuItem />
          <SubmenuItem />
        </MenuItem>
        <MenuItem text="В избранном" assignment="favorite" />
        <MenuItem text="Шаблоны" assignment="favorite">
          <SubmenuTemplates />
        </MenuItem>
        <ButtonCreate aria-label="create border">Создать</ButtonCreate>
      </BoxCustom>
    </DrawerCustom>
  );
}
