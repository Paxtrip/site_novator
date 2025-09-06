import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          Logo
        </div>
        <Search />
        <button className="bg-red-500 p-2 rounded" onClick={() => window.print()}>
          Print
        </button>
      </div>
    </header>
  );
};

export default Header;
