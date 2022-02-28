import Link from "next/link";
import React from "react";
import DropDown from "./navBarDropdown";

const MobileNavbar = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} lg:hidden`}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <Link href="/">
          <div
            className="bg-gray-900 cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            Home
          </div>
        </Link>

        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Project List
          </div>
        </Link>

        <DropDown />

        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Community
          </div>
        </Link>
        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Exchange
          </div>
        </Link>
        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Marketplace
          </div>
        </Link>
        <a
          href="https://drive.google.com/file/d/17wtQyZ54vM4LaSFRN7x5MC2D-B2YWlxo/view?usp=sharing"
          target="_blank"
        >
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About Us
          </div>
        </a>
        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Submit Project
          </div>
        </Link>
        <div className="flex items-center justify-center mt-12">
          {/* <div className="bg-gradient-to-r p-[11px] from-[#ccf7ff] to-[#1295bd] -skew-x-12 w-fit sm:hidden">
            <input
              className=" bg-black px-5 py-[0.55rem] text-white relative"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <i className="fas fa-search text-white font-bold relative right-[45px] cursor-text sm:hidden"></i> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
