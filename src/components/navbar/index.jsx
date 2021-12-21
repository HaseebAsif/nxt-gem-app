import React, { useState } from "react";
import MobileIconNavbar from "./mobileIconNavbar";
import MobileNavbar from "./mobileNavbar";
import WebNavbar from "./webNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile Menu Icon */}
            <MobileIconNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
            {/* Navbar Web Items */}
            <WebNavbar />
          </div>
        </div>
        {/* Navbar Mobile Items */}
        <MobileNavbar isOpen={isOpen} />
      </nav>
    </div>
  );
};

export default Navbar;
