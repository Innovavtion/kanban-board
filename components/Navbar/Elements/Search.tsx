"use client";

import { useState, useRef, useEffect } from "react";

import NavbarSubmenuItem from "../Submenu/SubmenuItem";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Typography, Box, Modal } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  color: theme.palette.text.primary,
  "& .MuiSvgIcon-root": {
    zIndex: 1,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.75, 1, 0.75, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderRadius: theme.shape.borderRadius,
    width: "0",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.text.primary, 0.05),
    },
    "&:focus": {
      cursor: "text",
      backgroundColor: alpha(theme.palette.text.primary, 0.15),
      width: "20ch",
      border: "0.5px solid",
      borderColor: alpha(theme.palette.text.primary, 0.15),
    },
    "@media (max-width: 1136px)": {
      "&:focus": {
        width: "16.2ch",
      },
    },
  },
}));

const StyledInputModals = styled(InputBase)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.default, 1),
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.05),
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const StyledListSearch = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "none",
  width: "100%",
  minHeight: "50px",
  marginTop: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.09)",
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[7],
  borderRadius: "4px",
  paddingTop: "10px",
}));

const StyledListSearchAdaptive = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "50px",
  marginTop: "7px",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  borderRadius: "4px",
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.05),
  paddingTop: "10px",
}));

type Props = {
  navbarSize: number;
};

export default function NavbarSearch({ navbarSize }: Props) {
  const drawerWidth = navbarSize;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const searchBoxRef = useRef<HTMLElement>(null);

  const openSearchBox = () => {
    setTimeout(() => {
      if (searchBoxRef.current) {
        searchBoxRef.current.style.display = "block";
      }
    }, 275);
  };

  const closeSearchBox = () => {
    if (searchBoxRef.current) {
      searchBoxRef.current.style.display = "none";
    }
  };

  const removeAdaptiveSearch = () => {
    if (drawerWidth != undefined && drawerWidth > 1100) {
      handleClose();
    }
  };

  useEffect(() => {
    removeAdaptiveSearch();
  });

  return (
    <>
      {drawerWidth != undefined && drawerWidth > 1100 ? (
        <>
          <Search sx={{ mx: 0 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onFocus={openSearchBox}
              onBlur={closeSearchBox}
            />
            <StyledListSearch ref={searchBoxRef}>
              <Typography
                sx={{ ml: "16px", fontSize: "10px", fontWeight: "bold" }}
                variant="overline"
              >
                Недавние доски
              </Typography>
              <NavbarSubmenuItem />
              <NavbarSubmenuItem />
            </StyledListSearch>
          </Search>
        </>
      ) : (
        <>
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                borderRadius: "4px",
              },
            }}
            onClick={handleOpen}
          >
            <SearchIconWrapper
              sx={{
                position: "relative",
              }}
            >
              <SearchIcon />
            </SearchIconWrapper>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", outline: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                width: "95%",
                mt: "7px",
                mx: "auto",
              }}
            >
              <Search
                sx={{
                  width: "100%",
                  ml: "0px",
                }}
              >
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputModals
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <StyledListSearchAdaptive>
                <Typography
                  sx={{ ml: "16px", fontSize: "10px", fontWeight: "bold" }}
                  variant="overline"
                >
                  Недавние доски
                </Typography>
                <NavbarSubmenuItem />
                <NavbarSubmenuItem />
              </StyledListSearchAdaptive>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}
