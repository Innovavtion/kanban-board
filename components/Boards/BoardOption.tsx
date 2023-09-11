"use client";

import { Box, Typography } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

const BoxBoardOption = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "3px 12px 3px 10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.2),
  color: alpha(theme.palette.text.primary, 0.75),
  borderRadius: "3px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.35),
    transitionDuration: "0.4s",
    transitionProperty: "background-color",
  },
}));

const IconCustom = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginRight: "6px",
  "& .MuiSvgIcon-root": {
    fontSize: "18px",
  },
}));

const TypographyCustom = styled(Typography)(() => ({
  marginTop: "1.8px",
}));

type Props = {
  text: string;
  iconSvg: JSX.Element;
};

export default function BoardOption({ text, iconSvg }: Props) {
  return (
    <BoxBoardOption>
      <IconCustom>{iconSvg}</IconCustom>
      <TypographyCustom>{text}</TypographyCustom>
    </BoxBoardOption>
  );
}
