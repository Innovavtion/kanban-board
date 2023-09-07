"use client";

import Image from "next/image";

import { Box, Typography } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

const ContainerBoardItem = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "240px",
  height: "140px",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.15),
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "10px",
  "&:hover::before": {
    content: "''",
    position: "absolute",
    borderRadius: "10px",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,

    display: "block",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1652874131919-2b85d7dbc2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",

    cursor: "pointer",
    filter: "blur(0.75px)",
  },
}));

const NameBoard = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  position: "absolute",
  width: "91%",
  height: "35%",
  wordWrap: "break-word",
  overflow: "hidden",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  zIndex: 1,
}));

type Props = {
  text: string;
};

export default function BoardItem({ text }: Props) {
  return (
    <ContainerBoardItem
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1652874131919-2b85d7dbc2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
      }}
    >
      <NameBoard>{text}</NameBoard>
    </ContainerBoardItem>
  );
}
