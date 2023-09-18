import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

const BoxCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  backgroundImage:
    "linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
  borderRadius: "8px",
  border: "1px solid",
  borderColor: alpha(theme.palette.text.primary, 0.1),
  boxShadow: theme.shadows[1],
  flexShrink: 0,
  marginBottom: "1px",

  overflow: "hidden",
  padding: "8px 8px 2px 12px",
  position: "relative",
  zIndex: 2,
}));

const TypographyCard = styled(Typography)(({ theme }) => ({
  wordWrap: "break-word",
  clear: "both",
  color: theme.palette.text.primary,
  display: "block",
  margin: "0 0 4px",
  overflow: "hidden",
  textDecoration: "none",
  fontSize: "15px",
}));

export default function BoardCard() {
  return (
    <BoxCard>
      <TypographyCard>Завершить этот сайт</TypographyCard>
    </BoxCard>
  );
}
