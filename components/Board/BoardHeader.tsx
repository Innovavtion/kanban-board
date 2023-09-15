import { useState } from "react";

import { Box, Typography, Rating } from "@mui/material";
import { styled, alpha } from "@mui/material";

import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const BoxBoardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "7px 20px",
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

const BoxTitleBoard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "32px",
  whiteSpace: "nowrap",
  lineHeight: "32px",
  maxWidth: "100%",
  marginBottom: "0",
  marginRight: "4px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.9),
  height: "100%",
  fontSize: "18px",
  fontWeight: "bold",
  lineHeight: "32px",
  textDecoration: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginBottom: "12px",
  padding: "0 10px",
}));

const BoxButton = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  height: "32px",
  width: "32px",
  marginBottom: "0",
  flexShrink: "0",
  padding: "6px",
  cursor: "pointer",
  marginRight: "4px",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const RatingCustom = styled(Rating)(({ theme }) => ({
  ".MuiRating-icon": {
    color: alpha(theme.palette.text.primary, 0.9),
    fontSize: "18.5px",
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
        <BoxTitleBoard>
          <TypographyTitle>Название доски</TypographyTitle>
        </BoxTitleBoard>
        <BoxButton>
          <RatingCustom
            name="favorites"
            max={1}
            value={value}
            size="small"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </BoxButton>
        <BoxButton>
          <PeopleOutlineIcon fontSize="small" />
        </BoxButton>
      </LeftHeaderBoard>
      <RightHeaderBoard></RightHeaderBoard>
    </BoxBoardHeader>
  );
}
