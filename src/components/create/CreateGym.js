import React, { useState } from "react";
import { createGym } from "@/pages/api/gym";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import FormCreate from "@/components/create/FormCreate";

export default function CreateGym() {
  const { toast, showToast } = useToast();
  const [gymData, setGymData] = useState({
    name: "",
    description: "",
    cep: "",
    addressName: "",
    district: "",
    city: "",
    state: "",
    number: "",
    complement: "",
  });

  const handleFieldChange = (name, value) => {
    setGymData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitCreateGym = async (formData) => {
    try {
      const res = await createGym(formData);
      if (res.status === 200) {
        showToast(res.data.success, "success");
        window.location.reload();
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar local.", "error");
      }
    } catch (error) {
      showToast("Erro ao criar local.", "error");
    }
  };

  const fields = [
    { label: "Nome", name: "name" },
    { label: "Descrição", name: "description" },
  ];

  return (
    <>
      {toast.show && (
        <ToastComponentSub type={toast.type} message={toast.message} />
      )}
      <FormCreate
        title="Adicionar Local"
        fields={fields}
        handleSubmit={handleSubmitCreateGym}
        showAddress={true}
        formData={gymData}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
}
