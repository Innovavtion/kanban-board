import { useState, useRef, useEffect } from "react";

export function useNavbar() {
  const [size, setSize] = useState<number>(0);

  const resizeHandler = () => {
    const clientWidth = document.documentElement.clientWidth;
    setSize(clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return { size };
}
