import Link from "next/link";
import React, { useState, useEffect } from "react";

import searchStyles from "./navbar.search.module.css";
import DropDown from "./navBarDropdown";

const WebNavbar = () => {
  const [value, setValue] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [topStoriesData, setTopStoriesData] = useState([]);
  const [showDropDown, setShowDropdown] = useState(false);

  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setTopStoriesData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);

  const handleChange = (e) => {
    const temp = topStoriesData.filter((coin) =>
      coin.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setShowDropdown(true);
    setFilteredData(temp);
  };

  const active =
    "bg-gray-900 cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium";
  const notActive =
    "cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  return (
    <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
      <div className="flex-shrink-0 flex items-center">
        <Link href="/">
          <img
            className="block lg:hidden h-8 w-auto cursor-pointer"
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_700/v1640600235/nexgen-logo_ip58ck.png"
            alt="NXTGEM"
          />
        </Link>
        <Link href="/">
          <img
            className="hidden lg:block h-8 w-auto cursor-pointer"
            src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_700/v1640600235/nexgen-logo_ip58ck.png"
            alt="NXTGEM"
          />
        </Link>
        <label className={searchStyles.search} htmlFor="inpt_search">
          <input id="inpt_search" type="text" />
        </label>
      </div>
      <div className="hidden lg:block lg:ml-6">
        <div className="flex space-x-4 items-center">
          <Link href="/">
            <a href="/">
              <div
                className={value === 1 ? active : notActive}
                onClick={() => setValue(1)}
                aria-current="page"
              >
                Home
              </div>
            </a>
          </Link>

          <Link href="/coming-soon">
            <a href="/coming-soon">
              <div
                className={value === 2 ? active : notActive}
                onClick={() => setValue(2)}
              >
                Project List
              </div>
            </a>
          </Link>

          <DropDown
            value={value}
            setValue={setValue}
            active={active}
            handleClose={() => {}}
            notActive={notActive}
          />
          <Link href="/coming-soon">
            <a href="/coming-soon">
              <div
                className={value === 4 ? active : notActive}
                onClick={() => setValue(4)}
              >
                Community
              </div>
            </a>
          </Link>
          <Link href="/exchange">
            <a href="/exchange">
              <div
                className={value === 5 ? active : notActive}
                onClick={() => setValue(5)}
              >
                Exchange
              </div>
            </a>
          </Link>
          <Link href="/coming-soon">
            <a href="/coming-soon">
              <div
                className={value === 6 ? active : notActive}
                onClick={() => setValue(6)}
              >
                Marketplace
              </div>
            </a>
          </Link>
          <a
            href="https://drive.google.com/file/d/17wtQyZ54vM4LaSFRN7x5MC2D-B2YWlxo/view?usp=sharing"
            target="_blank"
          >
            <div
              className={value === 7 ? active : notActive}
              onClick={() => setValue(7)}
            >
              About Us
            </div>
          </a>
          <Link href="/coming-soon">
            <a href="/coming-soon">
              <div
                className={value === 8 ? active : notActive}
                onClick={() => setValue(8)}
              >
                Submit Project
              </div>
            </a>
          </Link>

          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="bg-gradient-to-r p-[11px] from-[#ccf7ff] to-[#1295bd] -skew-x-12 hidden xl:block relative "
          >
            <input
              className="bg-black px-6 py-[0.55rem] text-white relative"
              type="search"
              name="search"
              placeholder="Search"
              onChange={handleChange}
            />
            <ul className="absolute bg-white  mx-[2px] mt-3">
              {showDropDown &&
                filteredData.slice(0, 4).map((item) => {
                  return (
                    <Link href={`/blog/${item.slug.current}`}>
                      <li
                        onClick={() => setShowDropdown(false)}
                        className=" px-4 py-2 border-b-2 cursor-pointer text-left"
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>

          <i className="fas fa-search text-white font-bold relative right-[65px] cursor-text hidden xl:block"></i>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
