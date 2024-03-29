import { Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PermMediaIcon from "@mui/icons-material/PermMedia";

const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
  "$ .MuiContainer-root": {
    "@media (min-width: 600px)": {
      paddingLeft: "2px",
    },
  },
}));

type Props = {
  assignment: "work" | "recent" | "favorite";
};

export default function NavbarSubmenuSubstrate({ assignment }: Props) {
  let content;

  if (assignment === "work") {
    content = (
      <>
        <AssessmentIcon fontSize="large" />
        <Typography sx={{ textAlign: "center", fontSize: 12.5 }}>
          Создайте свою доску, чтобы она отображалась здесь.
        </Typography>
      </>
    );
  } else if (assignment === "recent") {
    content = (
      <>
        <PermMediaIcon fontSize="large" />
        <Typography sx={{ textAlign: "center", fontSize: 12.5 }}>
          Чтобы увидеть недавние доски, откройте их.
        </Typography>
      </>
    );
  } else {
    content = (
      <>
        <LocalActivityIcon fontSize="large" />
        <Typography sx={{ textAlign: "center", fontSize: 12.5, px: "5px" }}>
          Чтобы быстро находить важные доски, отмечайте их.
        </Typography>
      </>
    );
  }

  return <CustomContainer>{content}</CustomContainer>;
}
