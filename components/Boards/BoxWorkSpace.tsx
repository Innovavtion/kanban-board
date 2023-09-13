"use client";

import { Box, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const BoxWorksSpace = styled(Box)(() => ({
  width: "100%",
  margin: "0 auto",
  marginTop: "20px",
  maxWidth: "755px",
  minWidth: "200px",
  overflowY: "auto",
  "@media (max-width: 905px)": {
    width: "85%",
  },
}));

const BoxTitle = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: "700",
  paddingBottom: "15px",
}));

const TypographyTitle = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "700",
  marginTop: "3px",
}));

type Props = {
  children: React.ReactNode;
};

export default function BoxWorkSpace({ children }: Props) {
  return (
    <BoxWorksSpace>
      <BoxTitle>
        <TypographyTitle>Ваши рабочие пространства</TypographyTitle>
      </BoxTitle>
      {children}
    </BoxWorksSpace>
  );
}
