import React, { useState } from "react";
import {
  MdClose,
  MdMenu,
  MdSchool,
  MdLocationOn,
  MdAppRegistration,
  MdExitToApp,
} from "react-icons/md";
import {
  BsBookmarksFill,
  BsFillPersonFill,
  BsPersonSquare,
} from "react-icons/bs";
import { GiRunningShoe, GiSportMedal } from "react-icons/gi";
import { GrSwim } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { LuSchool2 } from "react-icons/lu";
import Image from "next/image";
import DarkModeToggle from "../ui/DarkModeToggle";
import { useMediaQuery } from "react-responsive";
import { logout } from "../../pages/api/auth";

const links = [
  { id: 1, title: "Início", icon: <AiTwotoneHome />, link: "/admin/dashboard" },
  {
    id: 2,
    title: "Usuários",
    icon: <BsFillPersonFill />,
    link: "/admin/user/list",
  },
  { id: 3, title: "Registros", icon: <MdAppRegistration />, link: "#" },
  { id: 4, title: "Inscrições", icon: <BsBookmarksFill />, link: "#" },
  { id: 5, title: "Turmas", icon: <MdSchool />, link: "/admin/classes/list" },
  {
    id: 6,
    title: "Modalidades",
    icon: <GiRunningShoe />,
    link: "/admin/modality/list",
  },
  { id: 7, title: "Locais", icon: <MdLocationOn />, link: "/admin/gym/list" },
  {
    id: 8,
    title: "Institutos",
    icon: <LuSchool2 />,
    link: "/admin/institute/list",
  },
  {
    id: 9,
    title: "Programas",
    icon: <GiSportMedal />,
    link: "/admin/programs/list",
  },
  {
    id: 10,
    title: "Agenda Natação",
    icon: <GrSwim />,
    link: "#",
  },
  {
    id: 11,
    title: "Área do aluno",
    icon: <BsPersonSquare />,
    link: "/user/studentarea",
  },
];

export function Sidebar() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [isOpen, setIsOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("jwt");
      window.location.href = "/";
    } catch (error) {}
  };
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-blue-900 dark:bg-gray-800 dark:border-gray-700 dark:border-b">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-2xl text-white rounded-lg md:hidden"
              >
                {isOpen ? <MdClose /> : <MdMenu />}
              </button>
              <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
                <Image
                  src="/img/logo.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="flex items-center text-lg p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="mr-3">{link.icon}</span> {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="w-full font-medium mt-2 flex items-center text-lg p-2 text-red-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={handleLogout}
          >
            <MdExitToApp className="mr-3" /> Sair
          </button>
        </div>
      </aside>
    </>
  );
}
