import NavbarLogo from "./NavbarLogo";
import NavbarMenuItem from "./NavbarMenuItem";
import NavbarSubmenuItem from "./NavbarSubmenuItem";
import NavbarSubmenuTemplates from "./NavbarSubmenuTemplates";

import { Button, Box } from "@mui/material";

import DehazeIcon from "@mui/icons-material/Dehaze";

type Props = {
  navbarSize: any;
  openAdaptiveMenu: boolean;
  drawerOpenAdaptiveMenu: (openAdaptiveMenu: boolean) => void;
};

export default function NavbarLeftSection({
  navbarSize,
  openAdaptiveMenu,
  drawerOpenAdaptiveMenu,
}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      {navbarSize.clientWidth < 1100 ? (
        <Button
          color="inherit"
          aria-label="create border"
          sx={{
            minWidth: 5,
            px: "10px",
            py: "6px",
            ml: "5px",
            ":hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
          }}
          onClick={() => drawerOpenAdaptiveMenu(openAdaptiveMenu)}
        >
          <DehazeIcon />
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
