"use client";

import {
  Avatar,
  Typography,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

import IconViewKanban from "@mui/icons-material/ViewKanban";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustom = styled(Accordion)(({ theme }) => ({
  background: "none",
  boxShadow: "none",
  color: alpha(theme.palette.text.primary, 0.75),
  py: 0,
  ":before": {
    display: "none",
  },
}));

const ListItemCustom = styled(ListItem)(({ theme }) => ({
  paddingLeft: "12px",
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: alpha(theme.palette.text.primary, 0.05),
  },
  "& .MuiListItemText-root": {
    marginTop: "3px",
    marginBottom: "3px",
  },
  "& .MuiListItemText-primary": {
    fontSize: 14,
  },
  "& .MuiListItemText-secondary": {
    fontSize: 9.5,
  },
  "& .MuiListItemAvatar-root": {
    width: "5%",
    height: "5%",
    minWidth: 35,
  },
  "& .MuiAvatar-root": {
    width: "75%",
    height: "80%",
  },
  "& .MuiAccordionDetails-root": {
    padding: 0,
  },
  "& .Mui-disabled:before": {
    display: "none",
  },
}));

type Props = {
  text: string;
};

export default function AccordionWorkSpace({ text }: Props) {
  return (
    <AccordionCustom disableGutters={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          padding: "0",
          paddingRight: "10px",
          paddingLeft: "8px",
          ".MuiAccordionSummary-content": {
            alignItems: "center",
          },
        }}
      >
        <Avatar
          alt="Avatar"
          sx={{ width: 24, height: 24, marginRight: "10px" }}
          variant="rounded"
        >
          A
        </Avatar>
        <Typography sx={{ fontSize: "14px" }}>{text}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, px: 1 }}>
        <ListItemCustom>
          <IconViewKanban fontSize="small" sx={{ marginRight: "8px" }} />
          <ListItemText primary="Доски" />
        </ListItemCustom>
        <ListItemCustom>
          <IconViewKanban fontSize="small" sx={{ marginRight: "8px" }} />
          <ListItemText primary="Представления" />
        </ListItemCustom>
        <ListItemCustom>
          <IconViewKanban fontSize="small" sx={{ marginRight: "8px" }} />
          <ListItemText primary="Настройки" />
        </ListItemCustom>
      </AccordionDetails>
    </AccordionCustom>
  );
}
