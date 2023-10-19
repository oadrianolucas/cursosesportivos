import React, { useState } from "react";
import { BsTrash2 } from "react-icons/bs";
const ButtomDelete = ({ hdele, idClass }) => {
  const [confirming, setConfirming] = useState(false);
  const toggleConfirmation = () => {
    setConfirming(!confirming);
  };

  return (
    <div className="relative">
      <button
        className="text-sm flex items-center justify-start hover:text-gray-500"
        onClick={toggleConfirmation}
      >
        <BsTrash2 className="mr-1" /> Excluir
      </button>

      {confirming && (
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          <div className="flex items-center justify-center fixed inset-0 z-50">
            <div className="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Tem certeza que deseja excluir?
              </h3>
              <div className="flex">
                <button
                  className="w-full p-2 bg-red-600 rounded font-bold text-white hover:bg-red-400"
                  onClick={() => hdele(idClass)}
                >
                  Sim
                </button>

                <button
                  className="w-full p-2 bg-gray-600 rounded font-bold text-white ml-2 hover:bg-gray-500"
                  onClick={toggleConfirmation}
                >
                  Não
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtomDelete;
