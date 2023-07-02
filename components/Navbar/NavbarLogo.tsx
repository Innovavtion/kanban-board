import { Typography, Button } from "@mui/material";
import IconViewKanban from "@mui/icons-material/ViewKanban";

export default function NavbarLogo() {
  return (
    <Button
      size="large"
      color="inherit"
      sx={{ ml: 0, fontWeight: 700, py: 0.59 }}
    >
      <IconViewKanban sx={{ mr: 0.5 }} />
      <Typography sx={{ mt: 0.3, fontWeight: 700 }}>Kanban</Typography>
    </Button>
  );
}
