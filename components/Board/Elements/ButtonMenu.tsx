"use client";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import { Box, Typography, Menu, List } from "@mui/material";
import ButtonBoard from "./ButtonBoard";
import CloseIcon from "@mui/icons-material/Close";

const MenuCustom = styled(Menu)(({ theme }) => ({
  minWidth: "100px",
  maxWidth: "375px",
  "& .MuiPaper-root": {},
  ul: {
    paddingTop: "2.5px",
    paddingBottom: "2.5px",
  },
}));

const MenuTop = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  width: "100%",
  minHeight: "27px",
  alignItems: "center",
  justifyContent: "center",

  padding: "0px 5px 8px",

  ".closeMenu": {
    position: "absolute",

    top: 4,
    right: 3.5,
  },
}));

const TypographyTop = styled(Typography)(() => ({
  textAlign: "center",
  display: "block",
  position: "relative",
  lineHeight: "40px",

  fontWeight: "600",
  width: "75%",
  fontSize: "14px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
}));

const ListCustom = styled(List)(() => ({
  width: "100%",
  minWidth: 275,
  maxWidth: "375px",
  cursor: "pointer",
  padding: "5px 10px",
  "@media (max-width: 320px)": {
    minWidth: 250,
    maxWidth: 250,
  },
}));

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  sx?: object;
  textButton: string;
  titleMenu: string;
};

export default function ButtonMenu({
  children,
  iconLeft,
  iconRight,
  textButton,
  titleMenu,
  sx,
}: Props) {
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
      <ButtonBoard onClick={handleClick} sx={{ ...sx }}>
        {iconLeft}
        <Typography>{textButton}</Typography>
        {iconRight}
      </ButtonBoard>
      <MenuCustom
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
          <TypographyTop>{titleMenu}</TypographyTop>
          <ButtonBoard className="closeMenu" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </ButtonBoard>
        </MenuTop>
        <ListCustom>{children}</ListCustom>
      </MenuCustom>
    </>
  );
}
