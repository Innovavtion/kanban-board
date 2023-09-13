"use client";

import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";

import BoardsRecently from "@/components/Boards/BoardsRecently";
import BoardsWorkSpace from "./BoardsWorksSpace";
import BoxWorkSpace from "@/components/Boards/BoxWorkSpace";
import HomeLeftSidebar from "@/components/Boards/HomeLeftSidebar";

const BoxCustom = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  marginTop: "50px",
  "@media (max-width: 1025px)": {
    marginTop: "20px",
  },
}));

const BoxBoards = styled(Box)(() => ({}));

export default function HomeContent() {
  return (
    <BoxCustom>
      <HomeLeftSidebar />
      <BoxBoards>
        <BoardsRecently />
        <BoxWorkSpace>
          <BoardsWorkSpace />
          <BoardsWorkSpace />
        </BoxWorkSpace>
      </BoxBoards>
    </BoxCustom>
  );
}
