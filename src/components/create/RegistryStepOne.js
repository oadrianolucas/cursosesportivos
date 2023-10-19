import React from "react";
import InputFull from "@/components/ui/InputFull";

export function RegistryStepOne({ formData, handleChange, handleNext }) {
  return (
    <>
      <h2
        className="text-2xl font-bold leading-tight
  tracking-tight text-gray-500"
      >
        Criar cadastro
      </h2>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Nome:
        </label>
        <InputFull
          value={formData.name}
          type={"text"}
          name={"name"}
          onchange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Nascimento:
        </label>
        <InputFull
          value={formData.birth}
          type={"text"}
          name={"birth"}
          onchange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Celular:
        </label>
        <InputFull
          value={formData.phone}
          type={"text"}
          name={"phone"}
          onchange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Cpf:
        </label>
        <InputFull
          value={formData.cpf}
          type={"text"}
          name={"cpf"}
          onchange={handleChange}
        />
      </div>
      <button
        className="mt-3 font-medium bg-orange-500
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-blue-600"
        onClick={handleNext}
      >
        Próximo
      </button>
    </>
  );
}
