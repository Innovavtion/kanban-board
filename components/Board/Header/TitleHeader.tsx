import { useState, useRef, useEffect } from "react";

import { Box, Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material";

const BoxTitleBoard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "32px",
  whiteSpace: "nowrap",
  lineHeight: "32px",
  maxWidth: "100%",
  marginBottom: "0",
  marginRight: "3px",
  cursor: "pointer",
}));

const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.9),
  height: "100%",
  maxWidth: "100%",
  fontSize: "18px",
  fontWeight: "bold",
  lineHeight: "32px",
  textDecoration: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  padding: "0 8px",
  borderRadius: "5px",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const InputTitle = styled(InputBase)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.9),
  height: "100%",
  maxWidth: "100%",
  fontSize: "18px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "0 8px",
  borderRadius: "5px",
  "&.Mui-focused": {
    boxShadow: "inset 0 0 0 2px",
  },
}));

export default function BoardTitleHeader() {
  const titleWidth = useRef<HTMLElement>(null);
  const [width, setWidth] = useState<number | undefined | null>(null);
  const [editText, setEditText] = useState<boolean>(false);
  const [text, setText] = useState<string>("Название доски");

  const clickBox = () => {
    getWidth();
    setEditText(true);
  };

  const getWidth = () => {
    setWidth(titleWidth.current?.clientWidth);
    console.log(width);
  };

  return (
    <BoxTitleBoard
      onClick={() => {
        clickBox();
      }}
      ref={titleWidth}
    >
      {editText ? (
        <InputTitle
          autoFocus
          value={text}
          onBlur={() => {
            setEditText(false);
          }}
          onChange={(e) => {
            setText(e.currentTarget.value);
            getWidth();
          }}
          sx={{ width: { width } }}
        />
      ) : (
        <TypographyTitle>{text}</TypographyTitle>
      )}
    </BoxTitleBoard>
  );
}
