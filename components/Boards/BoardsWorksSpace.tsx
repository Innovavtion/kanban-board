import BoardItem from "./BoardItem";
import BoardOption from "./BoardOption";

import { Box, Avatar } from "@mui/material";

import { styled } from "@mui/material/styles";
import BoardCreate from "./BoardCreate";

import IconViewKanban from "@mui/icons-material/ViewKanban";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const BoardWorkSpace = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontWeight: "700",
  paddingBottom: "18px",
}));

const TypographyMangmentWorkSpace = styled(Box)(() => ({
  width: "22.5%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  marginRight: "7px",
  "@media (max-width: 904px)": {
    width: "75%",
  },
}));

const BoxSetting = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "71%",
  height: "100%",
  flexWrap: "wrap",
  "@media (max-width: 904px)": {
    marginTop: "5px",
    width: "100%",
  },
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
    <Box sx={{ paddingBottom: "27px" }}>
      <BoardWorkSpace>
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
      </BoardWorkSpace>
      <BoxBoards>
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardItem text="Название доски" />
        <BoardItem text="Название доски sdfsdfsdf dsfsdfsdfsdf sdfsdfs" />
        <BoardCreate text="Создать доску" />
      </BoxBoards>
    </Box>
  );
}
