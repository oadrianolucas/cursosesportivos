import React, { useState, useEffect } from "react";
import { allUsers, listUsers, findUser } from "@/pages/api/user";
import { Sidebar } from "@/components/common/Sidebar";
import { BsFillPersonFill, BsSearch, BsFilter } from "react-icons/bs";
import { useRouter } from "next/router";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiTwotoneSetting,
} from "react-icons/ai";

import { TotalUsers } from "@/components/TotalUsers";

export default function UsersPage() {
  const router = useRouter();
  const [totalUsers, setTotalUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 5;
  const halfLimit = Math.floor(pageLimit / 2);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const startPage = Math.max(1, currentPage - halfLimit);
  const total_users = totalUsers.totalUsers;
  const endPage = Math.min(
    Math.ceil(total_users / 10),
    currentPage + halfLimit
  );

  const pageButtons = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await listUsers(currentPage);
        if (res.error) {
          console.log(res.error);
        } else {
          setUsers(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    fetchTotalUsers();
  }, [currentPage]);

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

  useEffect(() => {
    async function fetchSelectedUser() {
      if (selectedUserId) {
        try {
          const user = await findUser(selectedUserId);
          console.log(user);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchSelectedUser();
  }, [selectedUserId]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUserClick = (userId) => {
    router.push(`/admin/user/${userId}`);
  };

  if (loading) {
    return <div>Carregando ...</div>;
  }
  return (
    <>
      <div className="h-screen">
        <Sidebar />
        <div className="p-4 mt-3 sm:ml-64">
          <div className="p-4 mt-10">
            <div className="flex items-center justify-between flex-wrap bg-white p-3 rounded ">
              <div className="w-full lg:w-2/4">
                <h1 className="flex items-center text-2xl text-blue-900 py-1  font-bold mr-6 ">
                  <BsFillPersonFill /> Usuários
                </h1>
                <form
                  action="/"
                  className="flex flex-col w-full md:flex-row  md:space-y-0 md:space-x-4"
                >
                  <input
                    className="border border-gray-300 p-2 w-full rounded-md"
                    type="text"
                    name="email"
                    placeholder="Pesquisar"
                  />
                  <div className="flex w-full my-3">
                    <BsFilter className="w-10 h-10 mr-2" />
                    <select
                      className="border w-full border-gray-300 p-2 rounded-md"
                      name="select"
                    >
                      <option className="text-gray-500" value="">
                        Filtro
                      </option>
                      <option value="opcao1">Opção 1</option>
                      <option value="opcao2">Opção 2</option>
                      <option value="opcao3">Opção 3</option>
                    </select>
                  </div>
                  <button
                    className="flex items-center bg-gray-700 hover:bg-gray-400 text-white 
                   font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    <BsSearch className="mr-2" /> Pesquisar
                  </button>
                </form>
              </div>
            </div>
            <TotalUsers />
            <div className="relative overflow-x-auto rounded">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Email
                    </th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={user.id}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        {user.token ? (
                          <span className="absolute h-3 w-3 rounded-full bg-red-500" />
                        ) : (
                          <span className="absolute h-3 w-3 rounded-full bg-green-500" />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="text-sm flex items-center justify-start hover:text-gray-900"
                          onClick={() => handleUserClick(user.id)}
                        >
                          <AiTwotoneSetting className="mr-1" /> Função
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="flex rounded-b items-center justify-between border-t
          border-gray-200 bg-white px-4 py-3 sm:px-6"
            >
              <div
                className="hidden sm:flex sm:flex-1 sm:items-center
            sm:justify-between"
              >
                <div>
                  <p className="text-sm text-gray-700">
                    Mostrando de{" "}
                    <span className="font-medium">
                      {(currentPage - 1) * 10 + 1}
                    </span>{" "}
                    á <span className="font-medium">{currentPage * 10}</span> de{" "}
                    <span className="font-medium">{total_users}</span> usuários
                  </p>
                </div>
                <div>
                  <nav
                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                  >
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="relative inline-flex items-center rounded-l-md px-2 py-2
                    text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50
                    focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Voltar</span>
                      <AiOutlineLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    {startPage > 1 && (
                      <span
                        className="relative inline-flex items-center px-4 py-2
                    text-sm font-semibold text-gray-700 ring-1 ring-inset
                    ring-gray-300 focus:outline-offset-0"
                      >
                        ...
                      </span>
                    )}
                    {pageButtons.map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`relative inline-flex items-center px-4
                      py-2 text-sm font-semibold ${
                        page === currentPage
                          ? "text-white bg-blue-900 hover:bg-blue-800"
                          : "text-gray-900"
                      } ring-1 ring-inset ring-gray-300 hover:bg-blue-50
                      focus:z-20 focus:outline-offset-0`}
                      >
                        {page}
                      </button>
                    ))}
                    {endPage < Math.ceil(total_users / 10) && (
                      <span
                        className="relative inline-flex items-center px-4
                    py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset
                    ring-gray-300 focus:outline-offset-0"
                      >
                        ...
                      </span>
                    )}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="relative inline-flex items-center rounded-r-md
                    px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300
                    hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Avançar</span>
                      <AiOutlineRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
