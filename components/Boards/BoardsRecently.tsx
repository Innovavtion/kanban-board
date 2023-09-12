"use client";

import BoardItem from "./BoardItem";

import { Box, Typography } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { styled } from "@mui/material/styles";

const BoxRecently = styled(Box)(() => ({
  width: "100%",
  margin: "0 auto",
  paddingBottom: "30px",
  maxWidth: "755px",
  minWidth: "200px",
  overflowY: "auto",
  "@media (max-width: 905px)": {
    width: "85%",
  },
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
