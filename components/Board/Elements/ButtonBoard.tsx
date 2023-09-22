import { ButtonBase } from "@mui/material";
import { styled, alpha } from "@mui/material";

const Button = styled(ButtonBase)(({ theme }) => ({
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
  zIndex: 1,
}));

// Наследуем весь базовый функционал реакт кнопок
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  sx?: object;
  className?: string;
}

export default function ButtonBoard({
  children,
  sx,
  className,
  ...restProps
}: Props) {
  return (
    <Button sx={{ ...sx }} className={`${className}`} {...restProps}>
      {children}
    </Button>
  );
}
