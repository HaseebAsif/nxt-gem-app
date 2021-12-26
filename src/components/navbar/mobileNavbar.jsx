import React from "react";

const MobileNavbar = ({ isOpen }) => {
  return (
    <div
      className={`${isOpen ? "block" : "hidden"} md:hidden`}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
        >
          Home
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Project List
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Resources
        </a>

        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Community
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Exchange
        </a>
        <a
          href="#"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          Marketplace
        </a>
        <a
          href="https://drive.google.com/file/d/19PGfRHQ7wTA_Gg6eZWSHu9QelmU5wT2I/view"
          target="_blank"
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
