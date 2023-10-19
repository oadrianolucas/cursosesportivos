import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsTokenValid(true);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  let links = [
    { id: 1, title: "Início", link: "/" },
    { id: 2, title: "Entrar", link: "/login" },
    { id: 3, title: "Cadastre-se", link: "/createuser" },
  ];

  if (isTokenValid) {
    links = links.filter(
      (link) => link.title !== "Entrar" && link.title !== "Cadastre-se"
    );
  }
  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a className="flex items-center" href="#">
                <Image
                  src="/img/logo.svg"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                  priority={false}
                />
              </a>
            </div>
          </div>
          <div
            className="flex-2 flex items-center 
          justify-center sm:items-stretch
          sm:justify-end"
          >
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.link}
                    className="text-white hover:bg-blue-800 
                    hover:text-white px-3 py-2 
                    rounded-md text-lg font-medium"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="sm:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center
                justify-center p-3 rounded-md 
                text-blue-300 hover:text-white 
                hover:bg-blue-900 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-blue-800 
                focus:ring-white"
                aria-expanded="false"
              >
                <FaBars className={`${isOpen ? "hidden" : "block"} h-6 w-6`} />
                <FaTimes className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-white hover:bg-blue-900 
              hover:text-white block px-3 
              py-2 rounded-md text-base 
              font-medium"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
