import React, { useState } from "react";

export function Address({ initialValues, handleFieldChange }) {
  const [addressData, setAddressData] = useState({
    addressName: "",
    cep: "",
    district: "",
    city: "",
    state: "",
    number: "",
    complement: "",
  });

  const handleBlurCep = async (event) => {
    const { value } = event.target;
    const cep = value?.replace(/[^0-9]/g, "");
    setAddressData({
      ...addressData,
      cep,
    });

    if (cep.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        setAddressData({
          ...addressData,
          addressName: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          state: data.uf,
        });

        handleFieldChange("addressName", data.logradouro);
        handleFieldChange("district", data.bairro);
        handleFieldChange("city", data.localidade);
        handleFieldChange("state", data.uf);
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });

    handleFieldChange(name, value);
  };

  return (
    <div className="mb-4">
      <h4 className="block mb-2 text-md font-medium text-gray-500">
        Logradouro
      </h4>
      <hr className="mb-1" />
      <div className="mb-2">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Cep
        </label>
        <input
          className="rounded border-solid border-2 py-2 px-1 w-full"
          name="cep"
          type="text"
          value={addressData.cep}
          onBlur={handleBlurCep}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <span className="text-gray-600 font-semibold">
          Endereço: {addressData.addressName}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600 font-semibold">
          Bairro: {addressData.district}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600 font-semibold">
          Cidade: {addressData.city}
        </span>
      </div>
      <div className="mb-2">
        <span className="text-gray-600 font-semibold">
          Estado: {addressData.state}
        </span>
      </div>
      <div className="flex -mx-1 mb-2 p-1">
        <div className="items-baseline">
          <label className="block mb-2 text-md font-medium text-gray-400">
            Número
          </label>
          <input
            className="rounded border-solid border-2 py-2 px-1 w-full "
            name="number"
            type="text"
            value={addressData.number}
            onChange={handleChange}
          />
        </div>
        <div className="pl-2">
          <label className="block mb-2 text-md font-medium text-gray-400">
            Complemento
          </label>
          <input
            className="rounded border-solid border-2 py-2 px-1 w-full"
            name="complement"
            type="text"
            value={addressData.complement}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
