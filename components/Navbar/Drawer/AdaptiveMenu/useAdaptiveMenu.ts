import { useState } from "react";

export function useAdaptiveMenu() {
  const [openAdaptiveMenu, setOpenAdaptiveMenu] = useState(false);

  const drawerOpenAdaptiveMenu = (openAdaptiveMenu: boolean) => {
    setOpenAdaptiveMenu(!openAdaptiveMenu);
  };

  return { openAdaptiveMenu, drawerOpenAdaptiveMenu };
}
