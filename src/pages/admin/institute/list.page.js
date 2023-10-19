import React, { useState, useEffect } from "react";
import { listInstitutes, deleteInstitute } from "@/pages/api/institute";
import { Sidebar } from "@/components/common/Sidebar";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import ButtomDelete from "@/components/ui/ButtomDelete";
import ButtomEdit from "@/components/ui/ButtomEdit";
import TableAdmin from "@/components/ui/TableAdmin";
import { MdLocationOn } from "react-icons/md";
import CreateInstitute from "@/components/create/CreateInstitute";

export default function InstitutePage() {
  const [institutes, setInstitutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast, showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearchResults, setHasSearchResults] = useState(true);

  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const res = await listInstitutes();
        if (res.error) {
          console.log(res.error);
        } else {
          setInstitutes(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutes();
  }, []);

  const handleDelete = async (instituteId) => {
    try {
      const res = await deleteInstitute({ id: instituteId });
      if (res.status === 200) {
        showToast(res.data.success, "success");
        const updatedInstitutes = institutes.filter(
          (institute) => institute.id !== instituteId
        );
        setInstitutes(updatedInstitutes);
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar instituto.", "error");
      }
    } catch (error) {
      console.error("Error deleting institute:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setHasSearchResults(true);
  };
  if (loading) {
    return <div>Carregando ...</div>;
  }
  const filteredData = institutes.filter((institute) =>
    institute.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const columns = [
    { header: "#", dataKey: "id" },
    { header: "Local", dataKey: "name" },
    { header: "Endereço", dataKey: "address" },
    { header: "Ações", dataKey: "actions" },
  ];

  const data = institutes.map((institute) => ({
    id: institute.id,
    name: institute.name,
    address: `${institute.Address.name}, ${institute.Address.number}`,
    actions: (
      <div className="flex space-x-2">
        <ButtomEdit name="institute" id={institute.id} />
        <ButtomDelete hdele={handleDelete} idClass={institute.id} />
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
            title={"Institutos"}
            data={data}
            columns={columns}
            total={filteredData.length}
            iconTitle={<MdLocationOn />}
            onSearch={handleSearch}
            searchTerm={searchTerm}
            hasSearchResults={hasSearchResults}
            createButton={<CreateInstitute />}
          />
        </div>
      </div>
    </>
  );
}
