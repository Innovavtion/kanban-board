import Search from "../Elements/Search";

import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import AppsIcon from "@mui/icons-material/Apps";
import AccountMenu from "../Elements/AccountMenu";

const AppsCustomIcon = styled(AppsIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

type Props = {
  navbarSize: number;
  open: boolean;
  drawerOpen: (open: boolean) => void;
};

export default function NavbarRightSection({
  navbarSize,
  open,
  drawerOpen,
}: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Search navbarSize={navbarSize} />
      <AccountMenu />
      <Button
        color="inherit"
        aria-label="open drawer"
        onClick={() => drawerOpen(open)}
        sx={{ minWidth: 5, px: "14px" }}
      >
        <AppsCustomIcon />
      </Button>
    </Box>
  );
}
