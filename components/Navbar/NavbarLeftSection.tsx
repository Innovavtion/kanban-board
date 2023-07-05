import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarSubmenuItem from "./NavbarSubmenuItem";
import NavbarSubmenuTemplates from "./NavbarSubmenuTemplates";

import { Button, Box } from "@mui/material";

import DensityMediumIcon from "@mui/icons-material/DensityMedium";

type Props = {
  navbarSize: any;
};

export default function NavbarLeftSection({ navbarSize }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      {navbarSize.clientWidth < 1100 ? (
        <Button
          color="inherit"
          aria-label="create border"
          sx={{
            minWidth: 5,
            px: "14px",
            py: "3.5px",
            ml: "5px",
          }}
        >
          <DensityMediumIcon />
        </Button>
      ) : (
        <>
          <NavbarLogo />
          <NavbarMenuItem text="Рабочие пространства" assignment="work" />
          <NavbarMenuItem text="Недавние" assignment="recent">
            <NavbarSubmenuItem />
            <NavbarSubmenuItem />
          </NavbarMenuItem>
          <NavbarMenuItem text="В избранном" assignment="favorite" />
          <NavbarMenuItem text="Шаблоны" assignment="favorite">
            <NavbarSubmenuTemplates />
          </NavbarMenuItem>
          <Button
            aria-label="create border"
            sx={{
              color: "inherit",
              minWidth: 5,
              px: "14px",
              py: "3.5px",
              ml: "5px",
              backgroundColor: "#23bf0b",
              textTransform: "none",
              fontSize: 14,
              ":hover": { backgroundColor: "#4cf233" },
            }}
          >
            Создать
          </Button>
        </>
      )}
    </Box>
  );
}
