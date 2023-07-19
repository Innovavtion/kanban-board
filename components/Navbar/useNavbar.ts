import { useState, useRef, useEffect } from "react";

export function useNavbar() {
  // Adaptive navbar
  const navbarRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState<object>({});

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = navbarRef.current || {};
    setSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { navbarRef, size };
}
