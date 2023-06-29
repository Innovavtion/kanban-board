import { Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

type Props = {
  anchorEl: null | HTMLElement;
  openMenu: boolean;
  handleClose: () => void;
  mode: boolean;
  setMode: (mode: boolean) => void;
};

export default function NavbarMenu({
  anchorEl,
  openMenu,
  handleClose,
  mode,
  setMode,
}: Props) {
  const theme = useTheme();
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openMenu}
      onClose={() => handleClose()}
      onClick={() => handleClose()}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem onClick={() => setMode(!mode)}>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon sx={{ mr: 1 }} />
        ) : (
          <Brightness4Icon sx={{ mr: 1 }} />
        )}
        Change Theme
      </MenuItem>
    </Menu>
  );
}
