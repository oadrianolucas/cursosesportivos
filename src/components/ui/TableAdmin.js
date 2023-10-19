import React, { useState } from "react";
import HeaderPage from "./HeaderPage";

const TableAdmin = ({
  data,
  columns,
  iconTitle,
  onSearch,
  searchTerm,
  title,
  createButton,
}) => {
  const [visibleItems, setVisibleItems] = useState(10);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const handleHideMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems - 10);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative overflow-x-auto mt-16">
      <div className="bg-white p-2 rounded w-full overflow-x-auto">
        <HeaderPage
          icon={iconTitle}
          title={title}
          onSearch={onSearch}
          searchTerm={searchTerm}
          showCreateButton={createButton}
          hasSearchResults={filteredData.length > 0}
        />
        {filteredData.length === 0 ? (
          <p className="text-red-500 font-bold p-2">
            Nenhum resultado encontrado.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table
              className="w-full text-md text-left text-gray-500
             dark:text-gray-400"
            >
              <thead
                className="text-gray-700 uppercase bg-gray-100
              dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  {columns.map((column, index) => (
                    <th key={index} className="px-6 py-2">
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(0, visibleItems).map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    {columns.map((column, colIndex) => (
                      <td
                        key={colIndex}
                        className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap
                      dark:text-white uppercase"
                      >
                        {item[column.dataKey]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div
        className="relative flex font-bold text-sm
        items-center justify-center p-2"
      >
        <button
          onClick={handleShowMore}
          className="bg-gray-500 hover:bg-gray-700 text-white
          font-bold py-2 px-4 rounded mr-2"
        >
          Mostrar Mais
        </button>
        {visibleItems > 10 && (
          <button
            onClick={handleHideMore}
            className="bg-gray-300 hover:bg-gray-200
            text-gray-600 py-2 px-4 rounded"
          >
            Mostrar Menos
          </button>
        )}
      </div>
    </div>
  );
};

export default TableAdmin;
