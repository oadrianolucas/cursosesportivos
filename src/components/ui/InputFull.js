import React from "react";
const InputFull = ({ value, onchange, name, type, label, span }) => {
  return (
    <>
      <label className="block mb-2 text-md font-medium text-gray-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="rounded border-solid border-2 py-2 px-1 w-full"
        value={value}
        onChange={onchange}
      />
    </>
  );
};

export default InputFull;
