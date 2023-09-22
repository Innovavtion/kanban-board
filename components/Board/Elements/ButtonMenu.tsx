"use client";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import { Box, Typography, Menu, List } from "@mui/material";
import ButtonBoard from "./ButtonBoard";
import CloseIcon from "@mui/icons-material/Close";

const MenuCustom = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {},
  ul: {
    paddingTop: "2.5px",
    paddingBottom: "2.5px",
  },
}));

const MenuTop = styled(Box)(() => ({
  position: "relative",
  width: "100%",
  minHeight: "27px",
  aliginItem: "center",
  justifyItems: "center",

  ".closeMenu": {
    position: "absolute",

    top: 4,
    right: 5,
  },
}));

const TypographyTop = styled(Typography)(() => ({
  textAlign: "center",
  display: "block",
  position: "relative",
  lineHeight: "40px",

  fontWeight: "600",
  width: "80%",
  fontSize: "14px",
  textOverflow: "ellipsis",
}));

const ListCustom = styled(List)(() => ({
  width: "100%",
  minWidth: 305,
  maxWidth: 305,
  cursor: "pointer",
  py: 0.1,
  "@media (max-width: 320px)": {
    minWidth: 250,
    maxWidth: 250,
  },
}));

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  textButton: string;
};

export default function ButtonMenu({ children, textButton }: Props) {
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
      <ButtonBoard onClick={handleClick}>
        <Typography>{textButton}</Typography>
      </ButtonBoard>
      <MenuCustom
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ top: 6 }}
        PaperProps={{
          sx: {
            "&:before": {
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              minWidth: "300px",
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
        <MenuTop>
          <TypographyTop>Изменение видимости</TypographyTop>
          <ButtonBoard className="closeMenu" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </ButtonBoard>
        </MenuTop>
        <ListCustom>ываываыва</ListCustom>
      </MenuCustom>
    </>
  );
}
