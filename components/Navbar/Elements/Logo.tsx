import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconViewKanban from "@mui/icons-material/ViewKanban";

const IconCustom = styled(IconViewKanban)(({ theme }) => ({
  marginRight: "4px",
  color: theme.palette.text.primary,
}));

const TypographyCustom = styled(Typography)(({ theme }) => ({
  marginTop: "2.4px",
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export default function NavbarLogo() {
  return (
    <Button
      size="large"
      color="inherit"
      sx={{ ml: 0, fontWeight: 700, py: 0.59 }}
    >
      <IconCustom />
      <TypographyCustom>Kanban</TypographyCustom>
    </Button>
  );
}
