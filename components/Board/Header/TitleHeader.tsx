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
  fontSize: "18px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "2px 0 0 6px",
  borderRadius: "5px",
  "&.Mui-focused": {
    border: `2px solid ${theme.palette.text.primary}`,
  },
}));

export default function BoardTitleHeader() {
  const titleWidth = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [editText, setEditText] = useState<boolean>(false);
  const [text, setText] = useState<string>("Название доски");

  const editOpen = () => {
    getWidth();
    setEditText(true);
  };

  const getWidth = () => {
    if (titleWidth.current) setWidth(titleWidth.current.clientWidth);
  };

  const setInputWidth = (widthCurrent: number, textCurrent: string) => {
    if (text.length < textCurrent.length) {
      setWidth(widthCurrent + 16);
    } else {
      console.log("Удалил символ");
      setWidth(widthCurrent);
    }
  };

  return (
    <BoxTitleBoard
      onClick={() => {
        editOpen();
      }}
      ref={titleWidth}
    >
      {editText ? (
        <>
          <InputTitle
            autoFocus
            value={text}
            onBlur={() => {
              setEditText(false);
            }}
            onChange={(e) => {
              setText(e.currentTarget.value);
              setInputWidth(e.currentTarget.scrollWidth, e.currentTarget.value);
            }}
            sx={{ width: width }}
            ref={inputRef}
            className="input"
          />
        </>
      ) : (
        <TypographyTitle>{text}</TypographyTitle>
      )}
    </BoxTitleBoard>
  );
}
