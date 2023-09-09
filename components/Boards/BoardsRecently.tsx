"use client";

import BoardItem from "./BoardItem";

import { Box, Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { styled } from "@mui/material/styles";

const BoxRecently = styled(Box)(() => ({
  width: "85%",
  marginTop: "20px",
  maxWidth: "835px",
}));

const BoxTitleRecently = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  paddingBottom: "15px",
}));

const BoxBoardsRecently = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  minWidth: "200px",
  width: "100%",
  backgroundColor: "white",
}));

const TypographyBoardsRecently = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  marginTop: "3px",
}));

export default function BoardsRecently() {
  return (
    <BoxRecently>
      <BoxTitleRecently>
        <AccessTimeIcon sx={{ marginRight: "10px", fontSize: 27 }} />
        <TypographyBoardsRecently>
          Недавно просмотренное
        </TypographyBoardsRecently>
      </BoxTitleRecently>
      <BoxBoardsRecently>
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски" />
      </BoxBoardsRecently>
    </BoxRecently>
  );
}
