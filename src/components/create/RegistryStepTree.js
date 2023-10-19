import React from "react";
import InputFull from "@/components/ui/InputFull";
import { Address } from "@/components/Address";

export function RegistryStepTree({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) {
  return (
    <div>
      <label className="block mb-2 text-md font-medium text-gray-400">
        Nome da mãe: 2
      </label>
      <InputFull type={"text"} name={"address"} onchange={handleChange} />
      <label className="block mb-2 text-md font-medium text-gray-400">
        Nome do pai:
      </label>
      <InputFull type={"text"} name={"address"} onchange={handleChange} />
      <label className="block mb-2 text-md font-medium text-gray-400">
        Gênero:
      </label>
      <select
        name="gender"
        className="rounded border-solid border-2 py-2 px-1 w-full"
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        <option value="male">Masculino</option>
        <option value="female">Feminino</option>
        <option value="other">Outro</option>
      </select>
      <label className="block mb-2 text-md font-medium text-gray-400">
        Vulnerabilidade Social:
      </label>
      <select
        name="vulnerabilidade"
        className="rounded border-solid border-2 py-2 px-1 w-full"
        onChange={handleChange}
      >
        <option value="1">Não</option>
        <option value="2">Sim</option>
      </select>

      <label className="block mb-2 text-md font-medium text-gray-400">
        PCD:
      </label>
      <select
        name="pcd"
        className="rounded border-solid border-2 py-2 px-1 w-full"
        onChange={handleChange}
      >
        <option value="1">Não</option>
        <option value="2">Sim</option>
      </select>
      <Address />
      <div className="flex">
        <button
          className="bg-gray-400 p-3 rounded mt-2 font-medium text-white hover:bg-gray-300 w-full"
          onClick={handlePrevious}
        >
          Anterior
        </button>
        <button
          className="bg-orange-400 p-3 rounded ml-2 mt-2 font-medium text-white hover:bg-blue-700 w-full"
          onClick={handleNext}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
