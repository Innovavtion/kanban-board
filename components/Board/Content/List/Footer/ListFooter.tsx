import ButtonBoard from "@/components/Board/Elements/ButtonBoard";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

const BoxFooterList = styled(Box)(() => ({
  display: "flex",
  minHeight: "20px",
  width: "100%",
  padding: "14px 8px 8px 8px",
}));

export default function ListFooter() {
  return (
    <BoxFooterList>
      <ButtonBoard sx={{ flexGrow: 1, justifyContent: "left", marginRight: 0 }}>
        <AddIcon
          fontSize="small"
          sx={{ marginLeft: "2px", marginRight: "10px" }}
        />
        <Typography>Добавить карточку</Typography>
      </ButtonBoard>
      <ButtonBoard>
        <FlipToFrontIcon fontSize="small" sx={{ transform: "rotate(90deg)" }} />
      </ButtonBoard>
    </BoxFooterList>
  );
}
