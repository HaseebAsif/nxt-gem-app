import React, { useState } from "react";
import Link from "next/link";

const DropDown = ({ value, setValue, active, notActive }) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => {
            setShowOptions(!showOptions);
            setValue(3);
          }}
          type="button"
          className={value === 3 ? active : notActive}
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
