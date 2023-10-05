import { useState } from "react";

import { Box, Typography, Rating } from "@mui/material";
import { styled, alpha } from "@mui/material";

import NameBoard from "../Elements/NameBoard";
import ButtonBoard from "../../Elements/ButtonBoard";
import ButtonMenu from "../../Elements/ButtonMenu";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PublicIcon from "@mui/icons-material/Public";

const LeftHeaderBoard = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  position: "relative",
  maxWidth: "100%",
  minHeight: "32px",
}));

const RatingCustom = styled(Rating)(({ theme }) => ({
  borderRadius: "5px",
  ".MuiRating-icon": {
    color: alpha(theme.palette.text.primary, 0.9),
    fontSize: "18.5px",
    height: "32px",
    minWidth: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ".MuiRating-iconFocus": {
    transform: "scale(1)",
  },
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const MenuItemBox = styled(Box)(({ theme }) => ({
  width: "340px",
  borderRadius: "3px",
  padding: "2px 5px",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const HeaderItem = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingBottom: "3px",
}));

const HeaderText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
}));

const DiscriptionItem = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "20px",
}));

export default function LeftSection() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <LeftHeaderBoard>
      <NameBoard />
      <RatingCustom
        name="favorites"
        max={1}
        value={value}
        size="small"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ marginRight: "3px" }}
      />
      <ButtonMenu
        textButton="Для рабочего пространства"
        iconLeft={
          <PeopleOutlineIcon fontSize="small" sx={{ marginRight: "8px" }} />
        }
        iconRight={<ExpandMoreIcon sx={{ marginLeft: "3px" }} />}
        titleMenu="Изменение видимости"
        sx={{ px: "10px" }}
      >
        <MenuItemBox>
          <HeaderItem>
            <LockOpenIcon
              sx={{ marginRight: "5px", color: "red", fontSize: "15.5px" }}
            />
            <HeaderText>Приватная</HeaderText>
          </HeaderItem>
          <DiscriptionItem>
            Просматривать и изменять эту доску могут только добавленные на нее
            участники.
          </DiscriptionItem>
        </MenuItemBox>
        <MenuItemBox>
          <HeaderItem>
            <PublicIcon
              sx={{ marginRight: "5px", color: "green", fontSize: "15.5px" }}
            />
            <HeaderText>Публичная</HeaderText>
          </HeaderItem>
          <DiscriptionItem>
            Просматривать эту доску могут все в Интернете. Изменять ее могут
            только участники.
          </DiscriptionItem>
        </MenuItemBox>
        <MenuItemBox>
          <HeaderItem>
            <PeopleAltIcon sx={{ marginRight: "5px", fontSize: "15.5px" }} />
            <HeaderText>Рабочее пространство</HeaderText>
          </HeaderItem>
          <DiscriptionItem>
            Просматривать и изменять эту доску могут все участники рабочего
            пространства - {"Название рабочего пространства"}
          </DiscriptionItem>
        </MenuItemBox>
      </ButtonMenu>
    </LeftHeaderBoard>
  );
}
