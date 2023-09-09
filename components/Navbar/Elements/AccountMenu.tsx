import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { styled, alpha } from "@mui/material/styles";

const MenuCustom = styled(Menu)(({ theme }) => ({
  ".MuiList-root": {
    "& .MuiMenuItem-root:hover": {
      backgroundColor: alpha(theme.palette.text.primary, 0.05),
    },
  },
}));

export default function AccountMenu() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);

  const menuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const menuClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={menuOpen}
          sx={{ marginX: "10px" }}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar alt="Avatar" sx={{ width: 29, height: 29 }}>
            A
          </Avatar>
        </IconButton>
      </Tooltip>
      <MenuCustom
        anchorEl={anchorElement}
        id="account-menu"
        open={open}
        onClose={menuClose}
        onClick={menuClose}
        PaperProps={{
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
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={menuClose}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          My account
        </MenuItem>
        <MenuItem onClick={menuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={menuClose}>
          <ListItemIcon>
            <QuestionMarkIcon fontSize="small" />
          </ListItemIcon>
          Help
        </MenuItem>
        <Divider />
        <MenuItem onClick={menuClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuCustom>
    </>
  );
}
