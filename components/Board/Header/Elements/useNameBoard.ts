import { useState, useRef, useEffect } from "react";

export function useNameBoard() {
  const titleRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLElement>(null);

  const [width, setWidth] = useState<number>(0);
  const [editText, setEditText] = useState<boolean>(false);
  const [text, setText] = useState<string>("Название доски");

  const editOpen = (editState: boolean) => {
    getWidth();
    setEditText(editState);
  };

  const getWidth = () => {
    if (titleRef.current) setWidth(titleRef.current.clientWidth);
  };

  const setInputWidth = (widthCurrent: number, textCurrent: string) => {
    text.length < textCurrent.length
      ? setWidth(widthCurrent + 16)
      : setWidth(widthCurrent);
  };

  return {
    text,
    width,
    editText,
    titleRef,
    inputRef,
    setText,
    editOpen,
    setInputWidth,
  };
}
