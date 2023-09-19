import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import BoardCard from "../Card/BoardCard";
import ListHeader from "./Header/ListHeader";
import ListFooter from "./Footer/ListFooter";

const BoxList = styled(Box)(() => ({
  height: "100%",
  minWidth: "275px",
  margin: "0 6px 0 6px",
  zIndex: 0,
}));

const List = styled(Box)(({ theme }) => ({
  width: "275px",
  minHeight: "25px",

  backgroundColor: theme.palette.background.paper,
  borderRadius: "5px",
  boxShadow: theme.shadows[3],
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
        <ListHeader />
        <ListCard>
          <BoardCard />
          <BoardCard />
        </ListCard>
        <ListFooter />
      </List>
    </BoxList>
  );
}
