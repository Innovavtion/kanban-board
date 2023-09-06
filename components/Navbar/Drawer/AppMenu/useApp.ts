import { useState } from "react";

export function useApp() {
  const [open, setOpen] = useState(false);

  const drawerOpen = (open: boolean) => {
    setOpen(!open);
  };

  return { open, drawerOpen };
}
