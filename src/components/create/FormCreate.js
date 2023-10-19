import React, { useState } from "react";
import InputFull from "../ui/InputFull";
import { Address } from "@/components/Address.js";
import { AiOutlinePlus } from "react-icons/ai";
const FormCreate = ({
  title,
  fields,
  handleSubmit,
  showAddress,
  formData,
  handleFieldChange,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="flex items-center bg-orange-500 hover:bg-gray-400
        text-white font-bold py-2 px-4 rounded w-full lg:w-sm"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <AiOutlinePlus className="mr-2" /> Adicionar
      </button>
      {showModal && (
        <>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          <div className="flex overflow-auto items-center justify-center fixed inset-0 z-50">
            <div className="p-6 m-auto bg-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold mb-4">{title}</h3>
              <div>
                {fields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <InputFull
                      label={field.label}
                      type="text"
                      name={field.name}
                      value={formData[field.name] || ""}
                      onchange={(e) =>
                        handleFieldChange(field.name, e.target.value)
                      }
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
                  className="text-red-500 background-transparent
                font-bold uppercase px-6 py-2 text-sm outline-none
                focus:outline-none mr-2"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Fechar
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  onClick={() => {
                    handleSubmit(formData);
                    setShowModal(false);
                  }}
                >
                  Criar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormCreate;
