import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material";

const BoxButton = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px",
  height: "32px",
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
    fontSize: "14px",
    fontWeight: "400",
    marginTop: "1px",
  },
}));

type Props = {
  children: React.ReactNode;
  sx?: object;
};

export default function ButtonHeader({ children, sx }: Props) {
  return <BoxButton sx={{ ...sx }}>{children}</BoxButton>;
}
