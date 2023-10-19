import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

export function ConfirmEmail() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    setEmail(params.get("email"));
  }, []);
  if (email === null) {
    window.location.href = `/login`;
  }
  return (
    <>
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
            Confirmar e-mail
          </h2>
          <form className="space-y-4 md:space-y-6">
            <div>
              <p className="text-gray-400">
                Enviamos um e-mail com um token para confirmação de dados,
                verifique a caixa de spam, se você ainda não tenha recebido o
                e-mail{" "}
                <a href="#" className="text-blue-500">
                  clique aqui.
                </a>
              </p>
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                E-mail
              </label>
              <input
                className="bg-white
                text-gray-800 sm:text-sm rounded-lg
                block w-full p-2.5
                placeholder-gray-400"
                type="email"
                name="email"
                value={email}
                disabled
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Token
              </label>
              <InputMask
                mask="*-*-*-*-*"
                maskChar={null}
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="text"
                name="birth"
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
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
