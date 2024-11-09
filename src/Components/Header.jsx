import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1 className="text-3xl text-[black] font-medium font-['Fonarto']">
          <span className="text-[#3a8ef5]">Devansh</span>.codes
        </h1>
        <div className="flex gap-x-3">
          <a href="https://dxgkr.nl/">
            <button className="w-32 h-10 rounded-md text-sm text-[#3A8EF5] transition duration-300 hover:text-[black]  font-semibold ">
              Projects
            </button>
          </a>
          <a href="https://dxgkr.nl/">
            <button className="w-32 h-10 rounded-md text-sm text-[#3A8EF5] transition duration-300 hover:text-[black]  font-semibold ">
              Projects
            </button>
          </a>
          <a href="https://dxgkr.nl/">
            <button className="w-32 h-10 rounded-md text-sm text-[#3A8EF5] transition duration-300 hover:text-[black]  font-semibold ">
              Projects
            </button>
          </a>
          <a href="mailto:contact@eray.codes">
            <button className="w-32 h-10 rounded-md text-sm border-2 border-[#3A8EF5] text-[#3A8EF5] bg-transparent transition duration-300 hover:text-[#fff] hover:bg-[#3A8EF5] font-semibold">
              Contact me
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
