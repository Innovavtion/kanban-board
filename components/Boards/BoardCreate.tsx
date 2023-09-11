"use client";

import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

const ContainerBoardCreate = styled(Box)(({ theme }) => ({
  display: "inline-block",
  minWidth: "155px",
  width: "23.5%",
  height: "115px",
  padding: "10px",
  backgroundColor: alpha(theme.palette.text.primary, 0.2),
  borderRadius: "10px",
  boxShadow: theme.shadows[3],
  cursor: "pointer",
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.35),
    transitionDuration: "0.4s",
    transitionProperty: "background-color",
  },
  "@media (max-width: 1100px)": {
    height: "175px",
    width: "calc(50% - 10px)",
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
}));

const TextBoardCreate = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontSize: "16.5px",
  fontWeight: "500",
  color: alpha(theme.palette.text.primary, 0.75),
}));

type Props = {
  text: string;
};

export default function BoardCreate({ text }: Props) {
  return (
    <ContainerBoardCreate className="BoardBox">
      <TextBoardCreate>{text}</TextBoardCreate>
    </ContainerBoardCreate>
  );
}
