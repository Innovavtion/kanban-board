// Theme Mui
import { useTheme } from "@mui/material/styles";

// Components Mui
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

// Icons Mui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ChatIcon from "@mui/icons-material/Chat";
import MailIcon from "@mui/icons-material/Mail";

// Styles Mui
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

// Drawer Styles Mui
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

type Props = {
  openAdaptiveMenu: boolean;
  drawerOpenAdaptiveMenu: (openAdaptiveMenu: boolean) => void;
  navbarSize: any;
};

export default function NavbarDrawerAdaptiveMenu({
  openAdaptiveMenu,
  drawerOpenAdaptiveMenu,
  navbarSize,
}: Props) {
  const theme = useTheme();
  const drawerWidth = navbarSize.clientWidth;

  const removeOpenAdaptiveMenu = () => {
    if (drawerWidth >= 1100 && openAdaptiveMenu === true) {
      drawerOpenAdaptiveMenu(openAdaptiveMenu);
    }
  };

  useEffect(() => {
    window.addEventListener("removeAdaptiveMenu", removeOpenAdaptiveMenu);
    removeOpenAdaptiveMenu();
    return () => {
      window.removeEventListener("removeAdaptiveMenu", removeOpenAdaptiveMenu);
    };
  });

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          display: "flex",
        },
      }}
      variant="persistent"
      anchor="left"
      open={openAdaptiveMenu}
    >
      <DrawerHeader
        sx={{
          "@media (min-width: 600px)": {
            minHeight: "49px",
          },
        }}
      >
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
    </Drawer>
  );
}
