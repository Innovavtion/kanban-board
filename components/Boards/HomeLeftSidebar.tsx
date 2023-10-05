"use client";

import { Box, Button, Typography, Divider } from "@mui/material";

import BoardOption from "./BoardOption";
import AccordionWorkSpace from "./AccordionWorkSpace";

import { styled, alpha } from "@mui/material/styles";

import IconViewKanban from "@mui/icons-material/ViewKanban";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AddIcon from "@mui/icons-material/Add";
import FlipToFrontIcon from "@mui/icons-material/FlipToFront";

const BoxCustom = styled(Box)(({ theme }) => ({
  width: "275px",
  padding: "0 16px",
  color: alpha(theme.palette.text.primary, 0.75),

  ".ButtonOption": {
    marginBottom: "4px",
    backgroundColor: "transparent",
    padding: "8px 8px",
    "& .MuiTypography-root": {
      fontWeight: "600",
      fontSize: "14px",
    },
    ":hover": {
      backgroundColor: alpha(theme.palette.text.primary, 0.1),
      transitionDuration: "0.4s",
      transitionProperty: "background-color",
    },
  },

  "@media (max-width: 1025px)": {
    display: "none",
  },
}));

const BoxHeaderContent = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const BoxAddWorkSpace = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "24px",
  height: "24px",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "auto",
  marginRight: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
    transitionDuration: "0.4s",
    transitionProperty: "background-color",
  },
}));

const BoxBottomContent = styled(Box)(({ theme }) => ({}));

export default function HomeLeftSidebar() {
  return (
    <BoxCustom>
      <BoardOption text="Доски" iconSvg={<IconViewKanban />} />
      <BoardOption
        text="Шаблоны"
        iconSvg={<FlipToFrontIcon sx={{ transform: "rotate(90deg)" }} />}
      />
      <BoardOption text="Главная страница" iconSvg={<ElectricBoltIcon />} />
      <Divider />
      <Box sx={{ padding: "12px 0" }}>
        <BoxHeaderContent>
          <Typography sx={{ fontSize: "12px", paddingLeft: "12px" }}>
            Рабочие пространства
          </Typography>
          <BoxAddWorkSpace>
            <AddIcon sx={{ fontSize: "20px" }} />
          </BoxAddWorkSpace>
        </BoxHeaderContent>
        <BoxBottomContent>
          <AccordionWorkSpace text="Название рабочего пространства" />
          <AccordionWorkSpace text="Название рабочего пространства" />
        </BoxBottomContent>
      </Box>
    </BoxCustom>
  );
}
