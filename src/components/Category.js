import { ImPower } from "react-icons/im";
import { TbSwimming } from "react-icons/tb";
import {
  MdOutlineAssessment,
  MdOutlineVolunteerActivism,
  MdLocationPin,
} from "react-icons/md";
export function Category() {
  const categories = [
    { id: 1, title: "Centros Esportivos", icon: <MdLocationPin />, link: "#" },
    { id: 2, title: "Modalidades", icon: <ImPower />, link: "#" },
    { id: 3, title: "Espontâneo Natação", icon: <TbSwimming />, link: "#" },
    {
      id: 4,
      title: "Avaliação Natação",
      icon: <MdOutlineAssessment />,
      link: "#",
    },
    {
      id: 5,
      title: "Seja Voluntário",
      icon: <MdOutlineVolunteerActivism />,
      link: "#",
    },
  ];
  return (
    <>
      <div className="text-center">
        <h3 className="text-4xl font-bold text-blue-900 mb-2">
          Navegue pelas opções
        </h3>
        <h4 className="text-lg font-medium text-gray-700 mb-2">
          Encontre o serviço ou a informação desejada pelas opções abaixo:
        </h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((categories) => (
          <a
            key={categories.id}
            href={categories.link}
            className=" transition ease-in-out delay-150  
                bg-white text-gray-900 text-center 
                p-6 border border-gray-300
                rounded-lg drop-shadow-md
                font-medium text-2xl flex flex-col
                items-center justify-center
                hover:-translate-y-1 hover:scale-40
                hover:bg-gray-500 duration-300 hover:text-white"
          >
            <span className="text-5xl block mb-3">{categories.icon}</span>
            {categories.title}
          </a>
        ))}
      </div>
    </>
  );
}
