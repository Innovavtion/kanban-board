"use client";

import BoardItem from "./BoardItem";

import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import BoardCreate from "./BoardCreate";

const BoxRecently = styled(Box)(() => ({
  width: "85%",
  margin: "0 auto",
  marginTop: "20px",
  maxWidth: "755px",
  minWidth: "200px",
  overflowY: "auto",
}));

const BoxTitleRecently = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: "700",
  paddingBottom: "15px",
}));

const BoxBoardsRecently = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  width: "100%",
  ".BoardBox:nth-of-type(4n)": {
    marginRight: 0,
  },
  "@media (max-width: 1100px)": {
    ".BoardBox:nth-of-type(2n)": {
      marginRight: 0,
    },
  },
  "@media (max-width: 400px)": {
    justifyContent: "center",
  },
}));

const TypographyBoardsRecently = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  marginTop: "3px",
}));

export default function BoardsWorkSpace() {
  return (
    <BoxRecently>
      <BoxTitleRecently>
        <TypographyBoardsRecently>
          Ваши рабочие пространства
        </TypographyBoardsRecently>
      </BoxTitleRecently>
      <BoxBoardsRecently>
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardCreate text="Создать доску" />
      </BoxBoardsRecently>
    </BoxRecently>
  );
}
