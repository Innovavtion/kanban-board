import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material";

import LeftSection from "./Section/LeftSection";
import RightSection from "./Section/RightSection";

const BoxBoardHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "7px 30px",
  height: "auto",
  backgroundColor: alpha(theme.palette.background.default, 0.7),
  backdropFilter: "blur(3px)",
}));

export default function BoardHeader() {
  return (
    <BoxBoardHeader>
      <LeftSection />
      <RightSection />
    </BoxBoardHeader>
  );
}
