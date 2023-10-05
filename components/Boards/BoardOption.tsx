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
  "@media (max-width: 904px)": {
    width: "calc(25% - 5px)",
  },
  "@media (max-width: 800px)": {
    marginTop: "5px",
    width: "calc(50% - 5px)",
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
  "@media (max-width: 420px)": {
    fontWeight: "700",
    fontSize: "11px",
  },
  "@media (max-width: 320px)": {
    fontWeight: "700",
    fontSize: "9.5px",
  },
}));

type Props = {
  text: string;
  iconSvg: JSX.Element;
  sx?: object;
};

export default function BoardOption({ text, iconSvg, sx }: Props) {
  return (
    <BoxBoardOption className="ButtonOption" sx={{ ...sx }}>
      <IconCustom>{iconSvg}</IconCustom>
      <TypographyCustom>{text}</TypographyCustom>
    </BoxBoardOption>
  );
}
