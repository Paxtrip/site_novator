import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          Logo
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded text-black"
        />
        <button className="bg-red-500 p-2 rounded">
          Print
        </button>
      </div>
    </header>
  );
};

export default Header;
