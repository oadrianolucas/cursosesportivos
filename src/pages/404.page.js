import Image from "next/image";

export default function Custom404() {
  return (
    <div
      className="flex flex-col items-center
    justify-center px-4 py-8 mx-auto"
    >
      <Image
        src="/img/error-404.svg"
        alt="Picture of the author"
        width={400}
        height={100}
      />
      <h1 className="font-bold text-2xl text-gray-700">
        Parece que esta página não existe
      </h1>
      <a className="mt-3 hover:text-gray-500" href="/">
        Ir para página principal
      </a>
    </div>
  );
}
