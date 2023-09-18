import ButtonHeader from "../Header/ButtonHeader";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";
import BoardCard from "./BoardCard";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

const BoxList = styled(Box)(() => ({
  height: "100%",
  minWidth: "275px",
  margin: "0 6px 0 6px",
  zIndex: 0,
}));

const List = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "25px",

  backgroundColor: theme.palette.background.paper,
  borderRadius: "5px",
  boxShadow: theme.shadows[3],
}));

const BoxListContent = styled(Box)(() => ({
  display: "flex",
  minHeight: "20px",
  width: "100%",
  padding: "14px 8px 8px 8px",
}));

const ListHeaderText = styled(Typography)(() => ({
  width: "100%",

  fontSize: "14px",
  fontWeight: "600",

  overflow: "hidden",
  overflowWrap: "break-word",

  marginTop: "1px",
  padding: "4px 8px 4px 12px",
}));

const ListCard = styled(Box)(() => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  gap: "7px",
  justifyContent: "space-between",
  margin: "0 4px",
  minHeight: "0",
  overflowX: "hidden",
  overflowY: "auto",
  padding: "1px 4px 0",
}));

export default function BoardList() {
  return (
    <BoxList>
      <List>
        <BoxListContent>
          <ListHeaderText>Название списка</ListHeaderText>
          <ButtonHeader>
            <MoreHorizIcon fontSize="small" />
          </ButtonHeader>
        </BoxListContent>
        <ListCard>
          <BoardCard />
          <BoardCard />
        </ListCard>
        <BoxListContent>
          <ButtonHeader
            sx={{ flexGrow: 1, justifyContent: "left", marginRight: 0 }}
          >
            <AddIcon
              fontSize="small"
              sx={{ marginLeft: "2px", marginRight: "10px" }}
            />
            <Typography>Добавить карточку</Typography>
          </ButtonHeader>
          <ButtonHeader>
            <FlipToFrontIcon
              fontSize="small"
              sx={{ transform: "rotate(90deg)" }}
            />
          </ButtonHeader>
        </BoxListContent>
      </List>
    </BoxList>
  );
}
