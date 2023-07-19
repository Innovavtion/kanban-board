import NavbarSearch from "../Elements/Search";

import { Button, Box } from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";

type Props = {
  navbarSize: { clientWidth?: number; clientHeight?: number };
  open: boolean;
  drawerOpen: (open: boolean) => void;
};

export default function NavbarRightSection({
  navbarSize,
  open,
  drawerOpen,
}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <NavbarSearch navbarSize={navbarSize} />
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
