"use client";

import { Box, Typography } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

import BoardsRecently from "@/components/Boards/BoardsRecently";
import BoardsWorkSpace from "@/components/Boards/BoardsWorkSpace";
import HomeLeftSidebar from "@/components/Boards/HomeLeftSidebar";

const BoxCustom = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
  width: "100%",
  marginTop: "50px",
}));

const BoxBoards = styled(Box)(() => ({}));

export default function HomeContent() {
  return (
    <BoxCustom>
      <HomeLeftSidebar />
      <BoxBoards>
        <BoardsRecently />
        <BoardsWorkSpace />
        <BoardsWorkSpace />
      </BoxBoards>
    </BoxCustom>
  );
}
