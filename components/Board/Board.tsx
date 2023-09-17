"use client";

import BoardHeader from "./Header/BoardHeader";
import BoardContent from "./Content/BoardContent";

import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material";

const BoxCustom = styled(Box)(({ theme }) => ({
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  display: "flex",
  flexDirection: "column",

  // for future background effects
  "::before": {
    content: "''",
    position: "absolute",
    // inset = top: 0, right: 0, bottom: 0, left: 0
    inset: 0,
  },
}));

export default function Board() {
  return (
    <BoxCustom
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1652874131919-2b85d7dbc2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
      }}
    >
      <BoardHeader />
      <BoardContent />
    </BoxCustom>
  );
}
