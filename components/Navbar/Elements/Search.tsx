"use client";

import { useState, useRef, useEffect } from "react";

import NavbarSubmenuItem from "../Submenu/SubmenuItem";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Typography, Box, Modal } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(1),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  height: "100%",
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.8, 1, 0.8, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderRadius: theme.shape.borderRadius,
    width: "0",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.white, 0.08),
    },
    "&:focus": {
      cursor: "text",
      backgroundColor: alpha(theme.palette.common.white, 0.2),
      width: "20ch",
    },
    // При ширине 900 и меньше, сделать инпут при фокусе меньше
    [theme.breakpoints.down("md")]: {
      "&:focus": {
        width: "15ch",
      },
    },
    "@media (max-width: 320px)": {
      "&:focus": {
        width: "8.45ch",
      },
    },
  },
}));

const StyledInputModals = styled(InputBase)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

type Props = {
  navbarSize: { clientWidth?: number; clientHeight?: number };
};

export default function NavbarSearch({ navbarSize }: Props) {
  const drawerWidth = navbarSize.clientWidth;

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
            <Box
              ref={searchBoxRef}
              sx={{
                position: "absolute",
                display: "none",
                width: "100%",
                minHeight: "50px",
                mt: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.09)",
                borderRadius: "4px",
                py: "10px",
              }}
            >
              <Typography
                sx={{ ml: "16px", fontSize: "10px", fontWeight: "bold" }}
                variant="overline"
              >
                Недавние доски
              </Typography>
              <NavbarSubmenuItem />
              <NavbarSubmenuItem />
            </Box>
          </Search>
        </>
      ) : (
        <>
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
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
              <Box
                sx={{
                  width: "100%",
                  minHeight: "50px",
                  mt: "7px",
                  backgroundColor: "#121212",
                  borderRadius: "4px",
                  py: "10px",
                }}
              >
                <Typography
                  sx={{ ml: "16px", fontSize: "10px", fontWeight: "bold" }}
                  variant="overline"
                >
                  Недавние доски
                </Typography>
                <NavbarSubmenuItem />
                <NavbarSubmenuItem />
              </Box>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
}
