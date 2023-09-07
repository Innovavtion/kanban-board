"use client";

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
  "& .MuiListItem-root": {
    py: 1,
  },
}));

export default function NavbarSubmenuItem() {
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
      />
    </ListItemCustom>
  );
}
