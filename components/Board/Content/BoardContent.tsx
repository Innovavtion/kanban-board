import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material";
import BoardList from "./List/BoardList";

const BoxContent = styled(Box)(() => ({
  height: "100%",
  width: "100%",

  display: "flex",

  marginTop: "10px",
}));

export default function BoardContent() {
  return (
    <BoxContent>
      <BoardList />
      <BoardList />
      <BoardList />
    </BoxContent>
  );
}
