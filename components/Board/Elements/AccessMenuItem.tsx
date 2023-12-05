import { Box, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";

const MenuItemBox = styled(Box)(({ theme }) => ({
  width: "340px",
  borderRadius: "3px",
  padding: "2px 5px",
  ":hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.1),
  },
}));

const HeaderItem = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingBottom: "3px",
}));

const HeaderText = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "20px",
}));

const DiscriptionItem = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "20px",
}));

type Props = {
  icon: JSX.Element;
  headerText: string;
  descriptionText: string;
};

export default function AccessMenuItem({
  icon,
  headerText,
  descriptionText,
}: Props) {
  return (
    <MenuItemBox>
      <HeaderItem>
        {icon}
        <HeaderText>{headerText}</HeaderText>
      </HeaderItem>
      <DiscriptionItem>{descriptionText}</DiscriptionItem>
    </MenuItemBox>
  );
}
