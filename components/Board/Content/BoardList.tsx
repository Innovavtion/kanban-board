import ButtonHeader from "../Header/ButtonHeader";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddIcon from "@mui/icons-material/Add";

const BoxList = styled(Box)(() => ({
  height: "100%",
  minWidth: "275px",
  margin: "0 6px 0 6px",
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
            <AddIcon fontSize="small" />
          </ButtonHeader>
        </BoxListContent>
      </List>
    </BoxList>
  );
}
