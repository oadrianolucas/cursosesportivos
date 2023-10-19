import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertTriangle, FiCheck } from "react-icons/fi";

const ToastComponent = ({ type, message, closeToast }) => {
  const styles = {
    success: {
      color: "text-white",
      background: "bg-green-600",
      background_close: "bg-green-500",
      icon: <FiCheck />,
    },
    error: {
      color: "text-white",
      background: "bg-red-600",
      background_close: "bg-red-500",
      icon: <FiAlertTriangle />,
    },
  };

  return (
    <div
      id="toast-default"
      className={`block flex items-center w-full animate-bounce delay-75 p-4
      ${styles[type].color} ${styles[type].background} rounded-lg shadow transition-transform`}
      role="alert"
    >
      <div className={`inline-flex items-center justify-center w-8 h-8`}>
        {styles[type].icon}
        <span className="sr-only">Icon</span>
      </div>
      <div className="ml-3 text-md font-bold mr-3">{message}</div>
      <button
        type="button"
        className={`ml-auto text-lg p-2 -mx-1.5 ${styles[type].color} ${styles[type].background_close}
        text-gray-400 hover:text-red-700 hover:text-red-900 rounded-lg
        focus:ring-2 focus:ring-red-300 inline-flex h-8 w-8`}
        aria-label="Close"
        onClick={closeToast}
      >
        <span className="sr-only">Close</span>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default ToastComponent;
