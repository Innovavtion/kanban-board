import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";

import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Rating,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";

const ListItemCustom = styled(ListItem)(({ theme }) => ({
  "&:hover": {
    cursor: "pointer",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
}));

export default function NavbarListLink() {
  const [value, setValue] = useState<number | null>(null);
  return (
    <ListItemCustom>
      <ListItemAvatar color="inherit">
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary="Development activity - tracking"
        secondary="Practice - System Brifing"
      />
      <Rating
        name="favorites"
        max={1}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ ml: 2 }}
      />
    </ListItemCustom>
  );
}
