import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";
import { logout } from "../../pages/api/auth";

export function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let links = [
    { id: 1, title: "Minha área", link: "/user/studentarea", filter: 0 },
    { id: 2, title: "Conta", link: "#", filter: 0 },
    { id: 3, title: "Dependentes", link: "#", filter: 0 },
    { id: 4, title: "Administração", link: "/admin/dashboard", filter: 1 },
  ];
  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("jwt");
      window.location.href = "/";
    } catch (error) {}
  };
  return (
    <nav className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="/img/logo.svg"
              alt="Picture of the author"
              width={100}
              height={100}
              priority={false}
            />
          </div>
          <div className="hidden md:block">
            <ul className="ml-4 flex items-center space-x-4">
              {links.map((link) => (
                <li key={link.id} className="p-2 list-none">
                  <a
                    href={link.link}
                    className="text-white font-bold hover:text-gray-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="flex items-center text-md justify-center
                  text-white font-bold hover:text-gray-300"
                  onClick={handleLogout}
                >
                  <MdExitToApp className="mr-2" /> Sair
                </button>
              </li>
            </ul>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded={isOpen}
            >
              <FaBars className={`${isOpen ? "hidden" : "block"} h-6 w-6`} />
              <FaTimes className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <ul>
              {links.map((link) => (
                <li key={link.id} className="p-2">
                  <a
                    href={link.link}
                    className="text-white font-bold hover:text-gray-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="px-2">
                <button
                  className="flex items-center text-md justify-center
                  text-white font-bold hover:text-gray-300"
                  onClick={handleLogout}
                >
                  <MdExitToApp className="mr-2" /> Sair
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
