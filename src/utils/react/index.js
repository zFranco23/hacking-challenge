import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    if (window) {
      window.scroll(0, 0, "smooth");
    }
  }, [location]);

  return <></>;
};
