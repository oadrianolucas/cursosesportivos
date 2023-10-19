import React, { useState } from "react";
import { createUser } from "@/pages/api/user";
import ToastComponent from "@/components/ui/ToastComponent ";

function calculateAge(birth) {
  const birthDate = new Date(birth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function CreateUser() {
  const [userData, setUserData] = useState({
    email: "",
    birth: "",
    password: "",
    confirmPassword: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToast({
      show: true,
      message,
      type,
    });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitUser = async (e) => {
    e.preventDefault();

    if (calculateAge(userData.birth) < 18) {
      showToast("Você deve ter pelo menos 18 anos para se registrar.", "error");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      showToast("As senhas não correspondem.", "error");
      return;
    }

    try {
      const res = await createUser(userData);

      if (res.status === 200) {
        showToast("Usuário criado com sucesso!", "success");
        window.location.href = "/outra-pagina";
      } else {
        showToast(`Erro ao criar usuário: ${res.status}`, "error");
      }
    } catch (error) {
      showToast("Erro ao criar usuário.", "error");
    }
  };

  return (
    <>
      {toast.show && (
        <ToastComponent message={toast.message} type={toast.type} />
      )}
      <div
        className="w-full bg-white rounded-lg
        shadow  md:mt-0 sm:max-w-md
        xl:p-0"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2
            className="text-2xl font-bold leading-tight
            tracking-tight text-gray-500"
          >
            Criar nova conta
          </h2>
          <form className="space-y-4 md:space-y-6" onSubmit={submitUser}>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                E-mail
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Nascimento
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="date"
                name="birth"
                value={userData.birth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Repita sua senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <button
                className="font-medium bg-blue-700
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-blue-600"
              >
                Criar conta
              </button>
            </div>
          </form>
          <div className="">
            <p className="text-gray-400">
              Ao se cadastrar, você estará concordando com as nossas{" "}
              <a href="#">políticas de privacidade</a>,{" "}
              <a href="#">políticas de cookies</a> e as normas da plataforma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
