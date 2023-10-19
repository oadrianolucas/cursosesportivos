import { useState } from "react";

const useToast = () => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToast({
      show: true,
      message,
      type,
    });
    setTimeout(() => hideToast(), 8000);
  };

  const hideToast = () => {
    setToast({
      show: false,
      message: "",
      type: "",
    });
  };

  return {
    toast,
    showToast,
    hideToast,
  };
};

export default useToast;
