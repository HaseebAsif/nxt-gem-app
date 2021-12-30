import Link from "next/link";
import React from "react";

const WebNavbar = () => {
  return (
    <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start overflow-hidden">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/">
          <img
            className="block lg:hidden h-8 w-auto cursor-pointer"
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_700/v1640600235/nexgen-logo_ip58ck.png"
            alt="NEXGen"
          />
        </Link>
        <Link href="/">
          <img
            className="hidden lg:block h-8 w-auto cursor-pointer"
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_700/v1640600235/nexgen-logo_ip58ck.png"
            alt="NEXGen"
          />
        </Link>
      </div>
      <div className="hidden md:block md:ml-6">
        <div className="flex space-x-4 items-center">
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

          <div className="bg-gradient-to-r p-[9px] from-[#ccf7ff] to-[#1295bd] -skew-x-12 hidden xl:block ">
            <input
              className=" bg-black px-5 py-3 text-white relative"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <i className="fas fa-search text-white font-bold relative right-[65px] cursor-text hidden xl:block"></i>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
