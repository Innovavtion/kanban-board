"use client";

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

const drawerWidth = 75;

const DrawerCustom = styled(Drawer)(() => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    display: "flex",
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  minHeight: "48.5px",
  maxHeight: "48.5px",
  "@media (min-width: 200px)": {
    minHeight: "48.5px",
    maxHeight: "48.5px",
  },
}));

const ListEnd = styled(List)(() => ({
  display: "flex",
  alignItems: "flex-end",
  height: "100%",
}));

const CustomListItemIcon = styled(ListItemIcon)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  color: "inherit",
}));

type Props = {
  mode: boolean;
  setMode: (mode: boolean) => void;
  open: boolean;
  drawerOpen: (open: boolean) => void;
};

export default function NavbarDrawer({
  mode,
  setMode,
  open,
  drawerOpen,
}: Props) {
  const theme = useTheme();

  return (
    <DrawerCustom variant="persistent" anchor="right" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => drawerOpen(open)} color="inherit">
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon sx={{ p: 0 }} />
          ) : (
            <ChevronRightIcon sx={{ p: 0 }} />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {["Chat"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ justifyContent: "center" }}>
              <CustomListItemIcon>
                {index % 2 === 0 ? <ChatIcon /> : <MailIcon />}
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 10,
                    width: drawerWidth - 5,
                    wordWrap: "break-word",
                  }}
                >
                  {text}
                </Typography>
              </CustomListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListEnd>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ justifyContent: "center" }}
            onClick={() => setMode(!mode)}
            color="inherit"
          >
            <CustomListItemIcon>
              {theme.palette.mode === "dark" ? (
                <>
                  <Brightness4Icon />
                  <Typography sx={{ textAlign: "center", fontSize: 10 }}>
                    Dark
                  </Typography>
                </>
              ) : (
                <>
                  <Brightness7Icon />
                  <Typography sx={{ textAlign: "center", fontSize: 10 }}>
                    White
                  </Typography>
                </>
              )}
            </CustomListItemIcon>
          </ListItemButton>
        </ListItem>
      </ListEnd>
    </DrawerCustom>
  );
}
