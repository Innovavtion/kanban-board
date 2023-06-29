// Componets Mui - distructurization
import { Typography, Button } from "@mui/material";
// Icons Mui - distructurization
import { ViewKanban } from "@mui/icons-material";

type Props = {
  open: boolean;
  drawerOpen: (open: boolean) => void;
};

export default function NavbarLogo() {
  return (
    <Button
      size="large"
      color="inherit"
      sx={{ ml: 0, fontWeight: 700, py: 0.59 }}
    >
      <ViewKanban sx={{ mr: 0.5 }} />
      <Typography sx={{ mt: 0.3, fontWeight: 700 }}>Kanban</Typography>
    </Button>
  );
}
