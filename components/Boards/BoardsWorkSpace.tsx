"use client";

import BoardItem from "./BoardItem";
import BoardOption from "./BoardOption";

import { Box, Typography, Avatar } from "@mui/material";

import { styled } from "@mui/material/styles";
import BoardCreate from "./BoardCreate";

import IconViewKanban from "@mui/icons-material/ViewKanban";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const BoxWorkSpace = styled(Box)(() => ({
  width: "85%",
  margin: "0 auto",
  marginTop: "20px",
  maxWidth: "755px",
  minWidth: "200px",
  overflowY: "auto",
}));

const BoxTitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: "700",
  paddingBottom: "15px",
}));

const TypographyTitle = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  marginTop: "3px",
}));

const BoxMangmentWorkSpace = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
  paddingBottom: "18px",
}));

const TypographyMangmentWorkSpace = styled(Box)(() => ({
  maxWidth: "250px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const BoxSetting = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  marginLeft: "7px",
}));

const BoxBoards = styled(Box)(() => ({
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

export default function BoardsWorkSpace() {
  return (
    <BoxWorkSpace>
      <BoxTitle>
        <TypographyTitle>Ваши рабочие пространства</TypographyTitle>
      </BoxTitle>
      <BoxMangmentWorkSpace>
        <Avatar
          alt="Avatar"
          sx={{ width: 32, height: 32, marginRight: "10px" }}
          variant="rounded"
        >
          A
        </Avatar>
        <TypographyMangmentWorkSpace>
          Название рабочего пространства
        </TypographyMangmentWorkSpace>
        <BoxSetting>
          <BoardOption text="Доски" iconSvg={<IconViewKanban />} />
          <BoardOption text="Представления" iconSvg={<GridViewIcon />} />
          <BoardOption text="Участники" iconSvg={<PersonOutlineIcon />} />
          <BoardOption text="Настройки" iconSvg={<SettingsIcon />} />
        </BoxSetting>
      </BoxMangmentWorkSpace>
      <BoxBoards>
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardCreate text="Создать доску" />
      </BoxBoards>
    </BoxWorkSpace>
  );
}
