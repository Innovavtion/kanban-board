import ButtonBoard from "@/components/Board/Elements/ButtonBoard";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const BoxHeaderList = styled(Box)(() => ({
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

  cursor: "pointer",
}));

export default function ListHeader() {
  return (
    <BoxHeaderList>
      <ListHeaderText>Название списка</ListHeaderText>
      <ButtonBoard>
        <MoreHorizIcon fontSize="small" />
      </ButtonBoard>
    </BoxHeaderList>
  );
}
