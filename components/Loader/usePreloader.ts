import { useState, useEffect } from "react";

export function usePreloader() {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setInterval(() => setLoader(false), 1000);
  }, []);

  return { loader };
}
