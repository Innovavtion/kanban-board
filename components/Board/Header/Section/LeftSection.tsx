import { useState } from "react";

import { Box, Typography, Rating } from "@mui/material";
import { styled, alpha } from "@mui/material";

import BoardTitleHeader from "../TitleHeader";
import ButtonBoard from "../../Elements/ButtonBoard";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

export default function LeftSection() {
  const [value, setValue] = useState<number | null>(null);
  return (
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
      <ButtonBoard>
        <PeopleOutlineIcon fontSize="small" sx={{ marginRight: "8px" }} />
        <Typography>Для рабочего пространства</Typography>
        <ExpandMoreIcon sx={{ marginLeft: "3px" }} />
      </ButtonBoard>
    </LeftHeaderBoard>
  );
}
