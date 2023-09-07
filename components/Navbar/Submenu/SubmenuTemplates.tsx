import {
  Typography,
  Avatar,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageIcon from "@mui/icons-material/Image";

const ListItemCustom = styled(ListItem)(({ theme }) => ({
  paddingLeft: "12px",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: alpha(theme.palette.text.primary, 0.05),
  },
  "& .MuiListItemText-root": {
    marginTop: "3px",
    marginBottom: "3px",
  },
  "& .MuiListItemText-primary": {
    fontSize: 14,
  },
  "& .MuiListItemText-secondary": {
    fontSize: 9.5,
  },
  "& .MuiListItemAvatar-root": {
    width: "5%",
    height: "5%",
    minWidth: 35,
  },
  "& .MuiAvatar-root": {
    width: "75%",
    height: "80%",
  },
  "& .MuiAccordionDetails-root": {
    padding: 0,
  },
}));

export default function NavbarSubmenuTemplates() {
  return (
    <Accordion
      sx={{ background: "none", boxShadow: "none", py: 0 }}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Популярные шаблоны</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ py: 0, px: 1 }}>
        <ListItemCustom>
          <ListItemAvatar color="inherit">
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Popular Template" />
        </ListItemCustom>
        <ListItemCustom>
          <ListItemAvatar color="inherit">
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Popular Template" />
        </ListItemCustom>
      </AccordionDetails>
    </Accordion>
  );
}
