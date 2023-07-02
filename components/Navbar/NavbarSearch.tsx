import { styled, alpha } from "@mui/material/styles";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginLeft: theme.spacing(1),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.7, 1, 0.7, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    borderRadius: theme.shape.borderRadius,
    width: "0",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: alpha(theme.palette.common.white, 0.2),
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
  },
}));

export default function NavbarSearch() {
  return (
    <Search sx={{ mx: 0 }}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
