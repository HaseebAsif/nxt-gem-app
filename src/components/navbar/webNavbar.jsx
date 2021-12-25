import Link from "next/link";
import React from "react";

const WebNavbar = () => {
  return (
    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start overflow-hidden">
      <div href="/" className="flex-shrink-0 flex items-center">
        <Link href="/">
          <img
            className="block lg:hidden h-8 w-auto cursor-pointer"
            src="/assets/Homepage-Assets/nexgen-logo.png"
            alt="NEXGen"
          />
        </Link>
        <Link href="/">
          <img
            className="hidden lg:block h-8 w-auto cursor-pointer"
            src="/assets/Homepage-Assets/nexgen-logo.png"
            alt="NEXGen"
          />
        </Link>
      </div>
      <div className="hidden md:block md:ml-6">
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Project List
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Resources
          </a>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Community
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Exchange
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Submit Project
          </a>

          <div className="bg-gradient-to-r p-[9px] from-[#0398b6] to-[transparent] -skew-x-12 hidden lg:block ">
            <input
              className=" bg-black px-5 py-3 text-white relative"
              type="search"
              name="search"
              placeholder="Search"
            />
            <i className="fas fa-search text-white font-bold opacity-70 relative right-[35px] cursor-text"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
