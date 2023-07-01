import { useState } from "react";
import NavbarListLinkItem from "./NavbarListLinkItem";

import { Typography, Button, Menu, List } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function NavbarListLink() {
  // Open Menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        size="large"
        color="inherit"
        sx={{ ml: 0, fontWeight: 700, py: 0.59 }}
        onClick={handleClick}
      >
        <Typography
          sx={{
            fontWeight: 300,
            fontSize: 14,
            textTransform: "capitalize",
          }}
        >
          Недавние
        </Typography>
        <ExpandMoreIcon sx={{}} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ top: 12 }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            cursor: "pointer",
          }}
        >
          <NavbarListLinkItem />
        </List>
      </Menu>
    </>
  );
}
