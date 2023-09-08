"use client";

import { useState } from "react";

import { Box, Typography, Rating, keyframes } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

const AnimationBoard = keyframes`
from {
  background: rgba(0,0,0,0)
}
to {
  background: rgba(0,0,0,0.25)
}`;

const ContainerBoardItem = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "220px",
  height: "125px",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.3),
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "10px",
  cursor: "pointer",
  boxShadow: theme.shadows[3],
  "&:hover::before": {
    content: "''",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    borderRadius: "10px",
    zIndex: 1,
    animation: `${AnimationBoard} 0.4s`,
    animationFillMode: "forwards",
  },
}));

const NameBoard = styled(Typography)(({ theme }) => ({
  color: "white",
  display: "-webkit-box",
  position: "absolute",
  width: "91%",
  height: "35%",
  wordWrap: "break-word",
  overflow: "hidden",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  zIndex: 2,
  fontSize: "16px",
  fontWeight: "700",
}));

const RatingCustom = styled(Rating)(() => ({
  stroke: "white",
  strokeWidth: "0.5px",
  position: "absolute",
  bottom: 10,
  right: 14,
  zIndex: 2,
}));

type Props = {
  text: string;
};

export default function BoardItem({ text }: Props) {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ContainerBoardItem
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1652874131919-2b85d7dbc2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80)",
      }}
    >
      <NameBoard>{text}</NameBoard>
      <RatingCustom
        name="favorites"
        max={1}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </ContainerBoardItem>
  );
}
