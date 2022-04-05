import React, { useState, useEffect } from "react";
import MobileIconNavbar from "./mobileIconNavbar";
import MobileNavbar from "./mobileNavbar";
import WebNavbar from "./webNavbar";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    width: "100%",
    textAlign: "center",
    transition: "top 0.6s",
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav
        className="bg-black z-[99999]"
        style={{ ...navbarStyles, top: visible ? "0px" : "-80px" }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Mobile Menu Icon */}
            <MobileIconNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
            {/* Navbar Web Items */}
            <WebNavbar />
          </div>
        </div>
        {/* Navbar Mobile Items */}
        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen}  />
      </nav>
    </div>
  );
};

export default Navbar;
