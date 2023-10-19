import React, { useEffect, useState } from "react";
import { findGym, createGym } from "@/pages/api/gym";
import { useRouter } from "next/router";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import FormEdit from "@/components/edit/FormEdit";

export default function EditGym() {
  const { toast, showToast } = useToast();
  const router = useRouter();
  const gymId = Number(router.query.id);
  const [gym, setGym] = useState(null);

  useEffect(() => {
    async function fetchGym() {
      try {
        const gymData = await findGym(gymId);
        setGym(gymData);
      } catch (error) {
        console.log(error);
      }
    }

    if (!isNaN(gymId)) {
      fetchGym();
    }
  }, [gymId]);

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

  const handleSubmitEditGym = async (formData) => {
    try {
      const res = await createGym(formData);
      if (res.status === 200) {
        showToast(res.data.success, "success");
        window.location.reload();
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao editar local.", "error");
      }
    } catch (error) {
      showToast("Erro ao editar local.", "error");
    }
  };

  const fields = [
    { label: "Nome", name: "name", value: gym?.name },
    { label: "Descrição", name: "description", value: gym?.description },
  ];

  return (
    <>
      {toast.show && (
        <ToastComponentSub type={toast.type} message={toast.message} />
      )}
      <FormEdit
        title="Editar Local"
        fields={fields}
        handleSubmit={handleSubmitEditGym}
        showAddress={true}
        formData={gymData}
        handleFieldChange={handleFieldChange}
      />
    </>
  );
}
