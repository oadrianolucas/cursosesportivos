import React, { useState } from "react";
import InputFull from "../ui/InputFull";
import { Address } from "@/components/Address.js";

const FormEdit = ({
  title,
  fields,
  handleSubmit,
  showAddress,
  formData,
  handleFieldChange,
}) => {
  return (
    <>
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <div>
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <InputFull
              label={field.label}
              type="text"
              name={field.name}
              value={formData[field.name] || ""}
              onchange={(e) => handleFieldChange(field.name, e.target.value)}
            />
          </div>
        ))}
      </div>
      {showAddress && (
        <Address
          handleFieldChange={handleFieldChange}
          initialValues={formData}
        />
      )}
      <div className="flex items-center justify-end mt-4">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
          type="button"
          onClick={() => {
            handleSubmit(formData);
          }}
        >
          Atualizar
        </button>
      </div>
    </>
  );
};

export default FormEdit;
