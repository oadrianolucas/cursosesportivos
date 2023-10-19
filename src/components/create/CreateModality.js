import React, { useState } from "react";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import FormCreate from "@/components/create/FormCreate";
import { createModality } from "@/pages/api/modality";

export default function CreateModality() {
  const { toast, showToast } = useToast();
  const [modalityData, setModalityData] = useState({
    name: "",
    description: "",
  });

  const handleFieldChange = (name, value) => {
    setModalityData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitCreateModality = async (formData) => {
    try {
      const res = await createModality(formData);
      if (res.status === 200) {
        showToast(res.data.success, "success");
        window.location.reload();
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar modalidade.", "error");
      }
    } catch (error) {
      showToast("Erro ao criar modalidade.", "error");
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
        title="Adicionar Modalidade"
        fields={fields}
        handleSubmit={handleSubmitCreateModality}
        showAddress={false}
        formData={modalityData}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
}
