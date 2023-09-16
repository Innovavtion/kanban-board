"use client";

import Link from "next/link";

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
  minWidth: "155px",
  width: "23.5%",
  height: "115px",
  borderRadius: "10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.3),
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "10px 12.5px",
  margin: "0 2% 15px 0",
  cursor: "pointer",
  boxShadow: theme.shadows[3],
  "@media (max-width: 1100px)": {
    height: "175px",
    width: "calc(50% - 8px)",
  },
  "@media (max-width: 535px)": {
    margin: "0 7px 10px 0",
    height: "150px",
    width: "calc(50% - 4px)",
  },
  "@media (max-width: 400px)": {
    margin: "0 0 10px 0",
    height: "155px",
    width: "100%",
  },
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
  top: 10,
  left: 12,
  width: "88%",
  height: "46%",
  wordWrap: "break-word",
  overflow: "hidden",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  textOverflow: "ellipsis",
  zIndex: 1,
  fontSize: "16px",
  fontWeight: "700",
  "@media (max-width: 588px)": {
    height: "27.5%",
  },
}));

const RatingCustom = styled(Rating)(({ theme }) => ({
  position: "absolute",
  bottom: 10,
  right: 14,
  zIndex: 2,
  ".MuiRating-icon": {
    color: alpha(theme.palette.common.white, 0.9),
    fontSize: "18.5px",
  },
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
      className="BoardBox"
    >
      <Link
        href="/board"
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <NameBoard>{text}</NameBoard>
      </Link>
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
