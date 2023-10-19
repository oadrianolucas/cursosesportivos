import React, { useState } from "react";
import { createInstitute } from "@/pages/api/institute";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import FormCreate from "@/components/create/FormCreate";

export default function CreateInstitute() {
  const { toast, showToast } = useToast();
  const [instituteData, setInstituteData] = useState({
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
    setInstituteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitCreateInstitute = async (formData) => {
    try {
      const res = await createInstitute(formData);
      if (res.status === 200) {
        showToast(res.data.success, "success");
        window.location.reload();
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar instituto.", "error");
      }
    } catch (error) {
      showToast("Erro ao criar instituto.", "error");
    }
  };

  const fields = [
    { label: "Nome", name: "name" },
    { label: "Descrição", name: "description" },
    { label: "Telefone/Celular", name: "phone" },
    { label: "Responsável", name: "responsible" },
  ];
  return (
    <>
      {toast.show && (
        <ToastComponentSub type={toast.type} message={toast.message} />
      )}
      <FormCreate
        title="Adicionar Instituto"
        fields={fields}
        handleSubmit={handleSubmitCreateInstitute}
        showAddress={true}
        formData={instituteData}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
}
