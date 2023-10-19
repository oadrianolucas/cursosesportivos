import React from "react";
const HeaderPage = ({
  icon,
  title,
  onSearch,
  searchTerm,
  showCreateButton,
}) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <>
      <h1 className="flex items-center text-2xl mb-2 text-blue-900 font-bold">
        {icon} {title}
      </h1>
      <div className="w-full lg:w-2/4">
        <div className="flex flex-col w-full md:flex-row  md:space-y-0 md:space-x-4 space-y-3 mb-2">
          <input
            className="border border-gray-300 p-2 w-full rounded-md"
            type="text"
            name="search"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div>{showCreateButton}</div>
        </div>
      </div>
    </>
  );
};

export default HeaderPage;
