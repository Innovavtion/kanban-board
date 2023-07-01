import { useState } from "react";
import NavbarListLinkItem from "./NavbarListLinkItem";

import { Typography, Button, Menu, List } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavbarContainerSubmenu from "./NavbarContainerSubmenu";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  assignment: "work" | "recent" | "favorite";
  text: string;
};

export default function NavbarListLink({ children, assignment, text }: Props) {
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
            textTransform: "none",
          }}
        >
          {text}
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
            minWidth: 305,
            maxWidth: 305,
            cursor: "pointer",
            py: 0.1,
          }}
        >
          {children?.toString.length != null ? (
            children
          ) : (
            <NavbarContainerSubmenu assignment={assignment} />
          )}
        </List>
      </Menu>
    </>
  );
}
