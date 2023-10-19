import React, { useState, useEffect } from "react";
import { listModalities } from "@/pages/api/modality";
import { Sidebar } from "@/components/common/Sidebar";
import { GiRunningShoe } from "react-icons/gi";
import CreateModality from "@/components/create/CreateModality";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import ButtomDelete from "@/components/ui/ButtomDelete";
import ButtomEdit from "@/components/ui/ButtomEdit";
import TableAdmin from "@/components/ui/TableAdmin";

export default function ModalitiesPage() {
  const [modalities, setModalities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast, showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearchResults, setHasSearchResults] = useState(true);

  useEffect(() => {
    const fetchModalities = async () => {
      try {
        const res = await listModalities();
        if (res.error) {
          console.log(res.error);
        } else {
          setModalities(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchModalities();
  }, []);

  const handleDelete = async (modalityId) => {
    try {
      const res = await deleteModality({ id: modalityId });
      if (res.status === 200) {
        showToast(res.data.success, "success");
        const updatedModalities = modalities.filter(
          (modality) => modality.id !== modalityId
        );
        setModalities(updatedModalities);
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar modalidade.", "error");
      }
    } catch (error) {
      console.error("Error deleting modality:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setHasSearchResults(true);
  };
  if (loading) {
    return <div>Carregando ...</div>;
  }
  const filteredData = modalities.filter((modality) =>
    modality.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const columns = [
    { header: "#", dataKey: "id" },
    { header: "Modalidade", dataKey: "name" },
    { header: "Ações", dataKey: "actions" },
  ];

  const data = modalities.map((modality) => ({
    id: modality.id,
    name: modality.name,
    actions: (
      <div className="flex space-x-2">
        <ButtomEdit name="modality" id={modality.id} />
        <ButtomDelete hdele={handleDelete} idClass={modality.id} />
      </div>
    ),
  }));

  return (
    <>
      {toast.show && (
        <ToastComponentSub
          type={toast.type}
          message={toast.message}
          closeToast={() => showToast({ show: false, message: "", type: "" })}
        />
      )}
      <div className="h-screen">
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <TableAdmin
            title={"Modalidades"}
            data={data}
            columns={columns}
            total={filteredData.length}
            iconTitle={<GiRunningShoe />}
            onSearch={handleSearch}
            searchTerm={searchTerm}
            hasSearchResults={hasSearchResults}
            createButton={<CreateModality />}
          />
        </div>
      </div>
    </>
  );
}
