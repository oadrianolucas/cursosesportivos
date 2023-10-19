import React, { useState, useEffect } from "react";
import { listGyms, deleteGym } from "@/pages/api/gym";
import { Sidebar } from "@/components/common/Sidebar";
import ToastComponentSub from "@/components/ui/ToastComponentSub";
import useToast from "@/components/ui/useToast";
import ButtomDelete from "@/components/ui/ButtomDelete";
import ButtomEdit from "@/components/ui/ButtomEdit";
import TableAdmin from "@/components/ui/TableAdmin";
import { MdLocationOn } from "react-icons/md";
import CreateGym from "@/components/create/CreateGym";

export default function GymsPage() {
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast, showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearchResults, setHasSearchResults] = useState(true);

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const res = await listGyms();
        if (res.error) {
          console.log(res.error);
        } else {
          setGyms(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGyms();
  }, []);

  const handleDelete = async (gymId) => {
    try {
      const res = await deleteGym({ id: gymId });
      if (res.status === 200) {
        showToast(res.data.success, "success");
        const updatedGyms = gyms.filter((gym) => gym.id !== gymId);
        setGyms(updatedGyms);
      } else if (res.status === 409) {
        showToast(res.data.error, "error");
      } else {
        showToast("Erro ao criar local.", "error");
      }
    } catch (error) {
      console.error("Error deleting gym:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setHasSearchResults(true);
  };
  if (loading) {
    return <div>Carregando ...</div>;
  }
  const filteredData = gyms.filter((gym) =>
    gym.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const columns = [
    { header: "#", dataKey: "id" },
    { header: "Local", dataKey: "name" },
    { header: "Endereço", dataKey: "address" },
    { header: "Ações", dataKey: "actions" },
  ];

  const data = gyms.map((gym) => ({
    id: gym.id,
    name: gym.name,
    address: `${gym.Address.name}, ${gym.Address.number}`,
    actions: (
      <div className="flex space-x-2">
        <ButtomEdit name="gym" id={gym.id} />
        <ButtomDelete hdele={handleDelete} idClass={gym.id} />
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
            title={"Locais"}
            data={data}
            columns={columns}
            total={filteredData.length}
            iconTitle={<MdLocationOn />}
            onSearch={handleSearch}
            searchTerm={searchTerm}
            hasSearchResults={hasSearchResults}
            createButton={<CreateGym />}
          />
        </div>
      </div>
    </>
  );
}
