"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";
import NavbarSubmenuSubstrate from "../Submenu/SubmenuSubstrate";
import { Typography, Button, Menu, List } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  assignment: "work" | "recent" | "favorite";
  text: string;
};

const MenuCustom = styled(Menu)(({ theme }) => ({
  ul: {
    paddingTop: "2.5px",
    paddingBottom: "2.5px",
  },
}));

export default function NavbarMenuItem({ children, assignment, text }: Props) {
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
        <ExpandMoreIcon
          sx={{ "@media (max-width: 1100px)": { display: "none" } }}
        />
      </Button>
      <MenuCustom
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ top: 12 }}
        PaperProps={{
          sx: {
            "&:before": {
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
            "@media (max-width: 1100px)": {
              mt: -1,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <List
          sx={{
            width: "100%",
            minWidth: 305,
            maxWidth: 305,
            cursor: "pointer",
            py: 0.1,
            "@media (max-width: 320px)": {
              minWidth: 200,
            },
          }}
        >
          {children?.toString.length != null ? (
            children
          ) : (
            <NavbarSubmenuSubstrate assignment={assignment} />
          )}
        </List>
      </MenuCustom>
    </>
  );
}
