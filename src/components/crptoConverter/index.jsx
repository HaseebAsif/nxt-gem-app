import React, { useState } from "react";

const CryptoConverter = ({ Coins }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);

  console.log(Coins);
  return (
    <div className="w-auto md:w-[19vw] p-4 bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] ">
      <div className="border-2 border-black ">
        <button
          id="dropdownDefault"
          data-dropdown-toggle="dropdown2"
          className="text-white bg-[black]/60 focus:outline-none font-medium text-sm px-2 py-2 text-center inline-flex items-center  "
          type="button"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          {Coins.slice(0, 1).map((item) => (
            <div className="flex">
              <img
                src={item.image}
                alt={item.name}
                className="inline-block top-[0px] h-[20px] w-auto xl:w-[20px]"
              />
              <p className="pl-2">{item.symbol.toUpperCase()}</p>
            </div>
          ))}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <input className="bg-transparent w-32 text-xl px-2 outline-none" />

        <div
          id="dropdown2"
          className={`z-20 w-fit absolute bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700  ${
            showOptions ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-1 px-3 text-sm text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdownDefault"
          >
            {Coins.slice(0, 3).map((item) => (
              <li className="flex py-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="inline-block top-[0px] h-auto md:h-[20px] w-auto xl:w-[20px]"
                />
                <p className="pl-2">{item.symbol.toUpperCase()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="py-2 text-center">
        <i className="fa-solid fa-arrow-right-arrow-left"></i>
      </div>
      <div className="border-2 border-black">
        <button
          id="dropdown"
          data-dropdown-toggle="dropdown1"
          className="text-white bg-[black]/60 focus:outline-none  font-medium text-sm px-2 py-2 text-center inline-flex items-center  "
          type="button"
          onClick={() => {
            setShowOptions2(!showOptions2);
          }}
        >
          {Coins.slice(0, 1).map((item) => (
            <div className="flex">
              <img
                src={item.image}
                alt={item.name}
                className="inline-block top-[0px] h-[20px] w-auto xl:w-[20px]"
              />
              <p className="pl-2">{item.symbol.toUpperCase()}</p>
            </div>
          ))}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <input className="bg-transparent w-32 text-xl px-2 outline-none" />

        <div
          id="dropdown1"
          className={`z-20 w-fit absolute bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700  ${
            showOptions2 ? "block" : "hidden"
          }`}
        >
          <ul
            className="py-1 px-2 text-sm text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdownDefaulta"
          >
            {Coins.slice(0, 3).map((item) => (
              <li className="flex py-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="inline-block top-[0px] h-auto md:h-[20px] w-auto xl:w-[20px]"
                />
                <p className="pl-2">{item.symbol.toUpperCase()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CryptoConverter;
