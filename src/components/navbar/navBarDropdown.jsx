import React, { useState } from "react";
import Link from "next/link";

const DropDown = ({
  value,
  handleClose,
  setValue,
  active = "bg-gray-900 cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium",
  notActive = "cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",
}) => {
  const [showOptions, setShowOptions] = useState(false);
  console.log(showOptions);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onMouseEnter={() => {
            setShowOptions(!showOptions);
            setValue(3);
          }}
          type="button"
          className={value && value === 3 ? active : notActive}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Resources
        </button>
      </div>

      {showOptions && (
        <div
          className="origin-top-right absolute mt-2 w-max rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="0"
          onMouseEnter={() => {
            setShowOptions(true);
            setValue(3);
          }}
          onMouseLeave={() => {
            setShowOptions(false);
          }}
        >
          <div className="py-1" role="none">
            <Link href="/top-stories">
              <div
                className="text-white block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                onClick={() => {
                  setShowOptions(!showOptions);
                  setValue(3);
                  handleClose();
                }}
              >
                Top Stories
              </div>
            </Link>
            <Link href="/top-videos">
              <div
                className="text-white block px-4 py-2 text-sm cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                onClick={() => {
                  setShowOptions(!showOptions);
                  setValue(3);
                  handleClose();
                }}
              >
                Top Videos
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
