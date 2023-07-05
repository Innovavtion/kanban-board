import NavbarSearch from "./NavbarSearch";

import { Button, Box } from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";

type Props = {
  open: boolean;
  drawerOpen: (open: boolean) => void;
};

export default function NavbarRightSection({ open, drawerOpen }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <NavbarSearch />
      <Button
        color="inherit"
        aria-label="open drawer"
        onClick={() => drawerOpen(open)}
        sx={{ minWidth: 5, px: "14px" }}
      >
        <AppsIcon />
      </Button>
    </Box>
  );
}
