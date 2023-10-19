import React from "react";
import Image from "next/image";

export function RegistryStep({ handleNext }) {
  return (
    <>
      <div className="my-3">
        <h1
          className="text-3xl font-bold leading-tight
  tracking-tight text-gray-500 text-center"
        >
          Parabéns!
        </h1>
        <h4 className="text-center text-gray-400">
          Você concluiu com sucesso a primeira etapa do cadastro. Clique em
          &quot;Vamos lá&quot;, para continuar.
        </h4>
        <Image
          src="/img/happy-create-user.svg"
          alt="Picture of the author"
          width={500}
          height={100}
        />
      </div>
      <button
        className="mt-3 font-medium bg-orange-500
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-orange-600"
        onClick={handleNext}
      >
        Valos Lá!
      </button>
    </>
  );
}
