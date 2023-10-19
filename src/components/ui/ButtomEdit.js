import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useRouter } from "next/router";

const ButtomEdit = ({ id, name }) => {
  const router = useRouter();
  const handleGymClick = (id) => {
    router.push(`/admin/${name}/${id}`);
  };
  return (
    <>
      <button
        className="text-sm flex items-center justify-start hover:text-gray-500"
        onClick={() => handleGymClick(id)}
      >
        <AiOutlineEdit className="mr-1" /> Editar
      </button>
    </>
  );
};

export default ButtomEdit;
