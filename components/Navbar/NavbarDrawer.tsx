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

// Drawer Styles Mui
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const drawerWidth = 75;

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
      anchor="right"
      open={open}
    >
      <DrawerHeader
        sx={{
          "@media (min-width: 600px)": {
            minHeight: "49px",
          },
        }}
      >
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "inherit",
                }}
              >
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
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List
        sx={{
          display: "flex",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setMode(!mode)}
            color="inherit"
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "inherit",
              }}
            >
              {theme.palette.mode === "dark" ? (
                <>
                  <Brightness4Icon />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 10,
                    }}
                  >
                    Dark
                  </Typography>
                </>
              ) : (
                <>
                  <Brightness7Icon />
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: 10,
                    }}
                  >
                    White
                  </Typography>
                </>
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
