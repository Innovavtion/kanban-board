import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

import ButtonBoard from "../../Elements/ButtonBoard";
import EditIcon from "@mui/icons-material/Edit";

const BoxCard = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  maxWidth: "300px",
  minHeight: "20px",

  padding: "8px 8px 2px 12px",
  marginBottom: "1px",

  backgroundColor: theme.palette.background.paper,
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  boxShadow: theme.shadows[1],

  flexShrink: 0,
  zIndex: 2,

  "& .button-card": {
    visibility: "hidden",
    position: "absolute",
    top: 2.5,
    right: 0,
  },

  ":hover": {
    cursor: "pointer",
    "& .button-card": {
      visibility: "visible",
    },
  },
}));

const TypographyCard = styled(Typography)(({ theme }) => ({
  display: "block",
  wordWrap: "break-word",
  overflow: "hidden",
  textDecoration: "none",
  clear: "both",

  color: theme.palette.text.primary,
  margin: "0 0 4px",
  fontSize: "15px",
}));

export default function BoardCard() {
  return (
    <BoxCard>
      <TypographyCard>Завершить этот сайт</TypographyCard>
      <ButtonBoard className="button-card">
        <EditIcon fontSize="small" sx={{ fontSize: "14px" }} />
      </ButtonBoard>
    </BoxCard>
  );
}
