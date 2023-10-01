import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import ButtonBoard from "../../Elements/ButtonBoard";
import ButtonMenu from "../../Elements/ButtonMenu";

import FilterListIcon from "@mui/icons-material/FilterList";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

const RightHeaderBoard = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexWrap: "nowrap",
  position: "relative",
  minHeight: "32px",
  marginLeft: "auto",
}));

export default function RightSection() {
  return (
    <RightHeaderBoard>
      <ButtonMenu
        textButton="Фильтр"
        titleMenu="Фильтр"
        iconLeft={
          <FilterListIcon fontSize="small" sx={{ marginRight: "8px" }} />
        }
        sx={{ px: "10px" }}
      ></ButtonMenu>
      <ButtonBoard sx={{ px: "10px" }}>
        <PersonAddAltIcon fontSize="small" sx={{ marginRight: "8px" }} />
        <Typography>Поделиться</Typography>
      </ButtonBoard>
      <ButtonBoard>
        <MoreHorizIcon fontSize="medium" />
      </ButtonBoard>
    </RightHeaderBoard>
  );
}
