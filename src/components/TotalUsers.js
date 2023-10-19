import React, { useState, useEffect } from "react";
import { BsPersonGear, BsPersonBadge } from "react-icons/bs";
import { GiTeacher, GiHealthNormal } from "react-icons/gi";
import { FaChalkboardTeacher, FaUserFriends } from "react-icons/fa";
import { RiMapPinUserLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { allUsers } from "@/pages/api/user";

export function TotalUsers() {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTotalUsers();
  }, []);

  const fetchTotalUsers = async () => {
    try {
      const userData = await allUsers();
      setTotalUsers(userData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>/</div>;
  }
  const categories = [
    {
      id: 1,
      title: "usuários",
      icon: <FaUserFriends />,
      count: totalUsers.totalUsers,
      isVisible: true,
    },
    {
      id: 2,
      title: "professores",
      icon: <GiTeacher />,
      count: totalUsers.teachers,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 3,
      title: "administradores",
      icon: <BsPersonGear />,
      count: totalUsers.administrators,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 4,
      title: "coordenadores",
      icon: <FaChalkboardTeacher />,
      count: totalUsers.coordinators,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 5,
      title: "gestores locais",
      icon: <RiMapPinUserLine />,
      count: totalUsers.local_managers,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 6,
      title: "estagiários",
      icon: <IoSchool />,
      count: totalUsers.inters,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 7,
      title: "salva vidas",
      icon: <GiHealthNormal />,
      count: totalUsers.lifeguard,
      isVisible: showAllCategories || !isMobile,
    },
    {
      id: 8,
      title: "contratados",
      icon: <BsPersonBadge />,
      count: totalUsers.contractors,
      isVisible: showAllCategories || !isMobile,
    },
  ];

  const toggleVisibility = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-4 gap-4 uppercase">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`${
              category.isVisible ? "block" : "hidden"
            } bg-white text-blue-900 dark:bg-gray-800 shadow-lg rounded-md
                flex items-center justify-between p-3 dark:border-gray-600 font-medium group`}
          >
            <div
              className="flex justify-center items-center w-14 h-14
              bg-blue-900 rounded-full transition-all duration-300
              transform group-hover:rotate-12"
            >
              <span className="text-white text-3xl">{category.icon}</span>
            </div>
            <div className="text-right">
              <p className="text-2xl">{category.count}</p>
              <p className="text-sm font-medium">{category.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden md:hidden lg:hidden">
        <button
          className="bg-gray-100 text-gray-500 font-medium w-full p-2 mb-4 rounded"
          onClick={toggleVisibility}
        >
          {categories.every((category) => category.isVisible) ? (
            <span className="flex items-center">
              <RiEyeOffLine className="mr-2" /> Categorias
            </span>
          ) : (
            <span className="flex items-center">
              <RiEyeLine className="mr-2" /> Categorias
            </span>
          )}
        </button>
      </div>
    </>
  );
}
