import React from "react";

export function RegistryStepFour({ formData, handlePrevious, handleNext }) {
  return (
    <div>
      <h2>Confirme seus dados:</h2>
      <p>Nome: {formData.name}</p>
      <p>Nascimento: {formData.birth}</p>
      <p>Celular: {formData.phone}</p>
      <p>Cpf: {formData.cpf}</p>
      <p>Nome da mãe: {formData.mother}</p>
      <p>Nome do pai: {formData.father}</p>
      <p>Gênero: {formData.gender}</p>

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
