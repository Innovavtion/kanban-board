import Logo from "../Elements/Logo";
import MenuItem from "../Elements/MenuItem";
import SubmenuItem from "../Submenu/SubmenuItem";
import SubmenuTemplates from "../Submenu/SubmenuTemplates";

import { Button, Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import DehazeIcon from "@mui/icons-material/Dehaze";

type Props = {
  navbarSize: any;
  openAdaptiveMenu: boolean;
  drawerOpenAdaptiveMenu: (openAdaptiveMenu: boolean) => void;
};

const ButtonOpen = styled(Button)(() => ({
  color: "inherit",
  minWidth: 5,
  px: "10px",
  py: "6px",
  ml: "5px",
  ":hover": { backgroundColor: "rgba(255, 255, 255, 0.08)" },
}));

const ButtonCreate = styled(Button)(() => ({
  color: "inherit",
  textTransform: "none",
  fontSize: 14,
  minWidth: 5,
  px: "14px",
  py: "3.5px",
  ml: "5px",
  backgroundColor: "#23bf0b",
  ":hover": { backgroundColor: "#4cf233" },
}));

export default function NavbarLeftSection({
  navbarSize,
  openAdaptiveMenu,
  drawerOpenAdaptiveMenu,
}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      {navbarSize.clientWidth <= 1100 ? (
        <ButtonOpen
          aria-label="create border"
          onClick={() => drawerOpenAdaptiveMenu(openAdaptiveMenu)}
        >
          <DehazeIcon />
        </ButtonOpen>
      ) : (
        <>
          <Logo />
          <MenuItem text="Рабочие пространства" assignment="work" />
          <MenuItem text="Недавние" assignment="recent">
            <SubmenuItem />
            <SubmenuItem />
          </MenuItem>
          <MenuItem text="В избранном" assignment="favorite" />
          <MenuItem text="Шаблоны" assignment="favorite">
            <SubmenuTemplates />
          </MenuItem>
          <ButtonCreate aria-label="create border">Создать</ButtonCreate>
        </>
      )}
    </Box>
  );
}
