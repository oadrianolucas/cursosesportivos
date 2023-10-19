import React from "react";
const ButtomUserArea = ({ text, icon }) => {
  return (
    <button
      className="flex items-center justify-center bg-orange-500 border-none font-bold text-white rounded
    w-full py-3 hover:bg-orange-400"
    >
      <span className="mr-2">{icon}</span>
      {text}
    </button>
  );
};

export default ButtomUserArea;
