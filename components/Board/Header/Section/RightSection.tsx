import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import ButtonBoard from "../../Elements/ButtonBoard";

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
      <ButtonBoard sx={{ px: "10px" }}>
        <FilterListIcon fontSize="small" sx={{ marginRight: "8px" }} />
        <Typography>Фильтр</Typography>
      </ButtonBoard>
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
