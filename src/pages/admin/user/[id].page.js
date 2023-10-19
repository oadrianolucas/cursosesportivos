import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { alterFilter, findUser } from "../../api/user.js";
import { Sidebar } from "@/components/common/Sidebar";
import ToastComponent from "@/components/ui/ToastComponent .js";

export default function UserPage() {
  const router = useRouter();
  const userId = Number(router.query.id);
  const [user, setUser] = useState(null);
  const functionNames = {
    0: "Sem Função",
    1: "Administrador",
    2: "Professor",
    3: "Cordenadores",
    4: "Gestor Local",
    5: "Estagiário",
    6: "Salva Vidas",
    7: "Contratado",
  };
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const closeToast = () => {
    setToast({ ...toast, show: false });
  };

  const showToast = (message, type) => {
    setToast({
      show: true,
      message,
      type,
    });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 8000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        id: userId,
        filter: filter,
      };
      const res = await alterFilter(data);
      showToast(`${res.data.success}`, "success");
      setFilter("");
      return res;
    } catch (error) {
      showToast(`${res.data.error}, ${error}`, "error");
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await findUser(userId);
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    }

    if (!isNaN(userId)) {
      fetchUser();
    }
  }, [userId]);

  const getFunctionName = (value) => {
    return functionNames[value] || "Função Desconhecida";
  };

  if (!isNaN(userId) && user === null) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="h-screen bg-gray-100">
      <Sidebar />
      <div className="p-4 mt-16 sm:ml-64">
        <div className="rounded bg-gray-50 bg-white lg:w-2/4 w-full">
          <div className="p-2">
            {toast.show && (
              <ToastComponent
                className="p-20"
                message={toast.message}
                type={toast.type}
                closeToast={closeToast}
              />
            )}
            <h1 className="text-lg font-bold">Detalhes usuário: </h1>
            <form className="grid" onSubmit={handleSubmit}>
              <span>E-mail: {user?.email}</span>
              <span>Cargo: {getFunctionName(user?.filter)}</span>
              <div className="border rounded p-3 mt-3">
                <h3 className="text-gray-600 font-font-medium mb-2">
                  Definir cargo:
                </h3>
                <div className="">
                  <select
                    name="filter"
                    onChange={handleChange}
                    className="mr-2 border rounded p-2 block w-full"
                    value={filter}
                  >
                    <option value="0">Sem função</option>
                  </select>
                  <button
                    className="px-2 bg-gray-700 block w-full rounded py-2
                    mt-2 font-bold text-white hover:bg-gray-500"
                    type="submit"
                  >
                    Alterar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
