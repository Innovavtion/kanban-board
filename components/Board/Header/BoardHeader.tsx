import { useState } from "react";

import { Box, Typography, Rating } from "@mui/material";
import { styled, alpha } from "@mui/material";

import BoardTitleHeader from "./TitleHeader";
import ButtonHeader from "./ButtonHeader";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const BoxBoardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "7px 30px",
  height: "auto",
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  backdropFilter: "blur(3px)",
}));

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

const RightHeaderBoard = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  position: "relative",
  minHeight: "32px",
  marginLeft: "auto",
}));

export default function BoardHeader() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <BoxBoardHeader>
      <LeftHeaderBoard>
        <BoardTitleHeader />
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
        <ButtonHeader>
          <PeopleOutlineIcon fontSize="small" sx={{ marginRight: "8px" }} />
          <Typography>Для рабочего пространства</Typography>
          <ExpandMoreIcon sx={{ marginLeft: "3px" }} />
        </ButtonHeader>
      </LeftHeaderBoard>
      <RightHeaderBoard>
        <ButtonHeader sx={{ px: "10px" }}>
          <FilterListIcon fontSize="small" sx={{ marginRight: "8px" }} />
          <Typography>Фильтр</Typography>
        </ButtonHeader>
        <ButtonHeader sx={{ px: "10px" }}>
          <PersonAddAltIcon fontSize="small" sx={{ marginRight: "8px" }} />
          <Typography>Поделиться</Typography>
        </ButtonHeader>
        <ButtonHeader>
          <MoreHorizIcon fontSize="medium" />
        </ButtonHeader>
      </RightHeaderBoard>
    </BoxBoardHeader>
  );
}
