import React, { useState } from "react";
import { login } from "../pages/api/auth";
import ToastComponent from "./ui/ToastComponent ";

export function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
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

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login(userData);
      if (res.status === 404) {
        showToast(`${res.data.error}`, "error");
      }
      if (res.status === 403) {
        window.location.href = `/user/confirmemail?email=${encodeURIComponent(
          userData.email
        )}`;
      }
      if (res.status === 200) {
        localStorage.setItem("jwt", res.data.auth);
        showToast(`${res.data.success}`, "success");
        window.location.href = "/user/studentarea";
      } else {
        showToast(`${res.data.error}`, "error");
      }
    } catch (error) {
      showToast(`Sistema fora do ar.`, "error");
    }
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-500">
            Acessar / Login
          </h2>
          {toast.show && (
            <ToastComponent
              message={toast.message}
              type={toast.type}
              closeToast={closeToast}
            />
          )}
          <form className="space-y-4 md:space-y-6" onSubmit={submitLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-400"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-md font-medium text-gray-400"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400"
              />
            </div>
            <div>
              <button
                type="submit"
                className="font-medium bg-blue-700 text-white text-2xl rounded-lg focus:border-primary-600 block w-full p-2.5 hover:bg-blue-600"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="my-3">
            <a href="#" className="font-medium text-blue-700 py-2 text-lg">
              Esqueceu a senha?
            </a>
            <hr className="my-3 border-1 border-gray-200" />
            <div className="text-center">
              <a
                href="/createuser"
                className="font-medium bg-orange-500 text-white text-2xl rounded-lg focus:border-primary-600 block w-full p-2.5 hover:bg-orange-400"
              >
                Criar nova conta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
