import { useEffect } from "react";

const useBodyScrollLock = (toggle: boolean) => {
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);
};

export default useBodyScrollLock;
