import { Typography, ButtonBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

import Link from "next/link";

import IconViewKanban from "@mui/icons-material/ViewKanban";

// Сделать отдельно базовую кнопку
const Button = styled(ButtonBase)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  height: "38px",
  minWidth: "32px",
  maxWidth: "400px",
  marginBottom: "0",
  flexShrink: "0",
  padding: "6px",
  cursor: "pointer",
  marginRight: "3px",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
  ".MuiTypography-root": {
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "700",
    marginTop: "1px",
    color: theme.palette.text.primary,
  },
  zIndex: 1,
}));

const IconCustom = styled(IconViewKanban)(({ theme }) => ({
  marginRight: "4px",
  color: theme.palette.text.primary,
}));

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function NavbarLogo({ ...restProps }: Props) {
  return (
    <Link href="/" style={{ color: "white", textDecoration: "none" }}>
      <Button sx={{ ml: 0, fontWeight: 700, py: 0.59 }} {...restProps}>
        <IconCustom />
        <Typography>Kanban</Typography>
      </Button>
    </Link>
  );
}
