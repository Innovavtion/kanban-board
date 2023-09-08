"use client";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const ContainerBoardCreate = styled(Box)(({ theme }) => ({
  display: "inline-block",
  width: "220px",
  height: "125px",
  padding: "10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.3),
  borderRadius: "10px",
  boxShadow: theme.shadows[3],
  "&:hover": {
    cursor: "pointer",
    backgroundColor: alpha(theme.palette.text.primary, 0.35),
    transitionDuration: "0.4s",
    transitionProperty: "background-color",
  },
}));

const TextBoardCreate = styled(Typography)(({ theme }) => ({
  lineHeight: "105px",
  textAlign: "center",
  fontSize: "16.5px",
  fontWeight: "500",
  color: alpha(theme.palette.text.primary, 0.75),
}));

type Props = {
  text: string;
};

export default function BoardCreate({ text }: Props) {
  return (
    <ContainerBoardCreate>
      <TextBoardCreate>{text}</TextBoardCreate>
    </ContainerBoardCreate>
  );
}
