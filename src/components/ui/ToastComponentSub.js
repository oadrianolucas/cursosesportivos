import React from "react";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";
const ToastComponentSub = ({ type, message }) => {
  const styles = {
    success: {
      color: "text-white",
      background: "bg-green-600",
      icon: <FiCheck />,
    },
    error: {
      color: "text-white",
      background: "bg-red-600",
      icon: <FiAlertTriangle />,
    },
  };

  return (
    <div
      id="toast-default"
      className={`w-1/1 animate-bounce delay-75 rounded-lg
        shadow transition-transform items-center py-4
        absolute right-9 flex z-50 h-14 top-28
        ${styles[type]?.color} ${styles[type]?.background}`}
      role="alert"
    >
      <div className={`inline-flex items-center justify-center w-8 h-8`}>
        {styles[type]?.icon}
        <span className="sr-only">Icon</span>
      </div>
      <div className="ml-3 text-md font-bold mr-3">{message}</div>
    </div>
  );
};

export default ToastComponentSub;
