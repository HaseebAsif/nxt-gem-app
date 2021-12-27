import Link from "next/link";
import React from "react";

const MobileNavbar = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} md:hidden`}
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

        <Link href="/coming-soon">
          <div className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Resources
          </div>
        </Link>

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
      </div>
    </div>
  );
};

export default MobileNavbar;
