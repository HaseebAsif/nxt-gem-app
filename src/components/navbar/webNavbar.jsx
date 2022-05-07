import Link from "next/link";
import React, { useState } from "react";

import searchStyles from "./navbar.search.module.css";
import DropDown from "./navBarDropdown";

const WebNavbar = () => {
  const [value, setValue] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [topStoriesData, setTopStoriesData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setTopStoriesData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
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
            <div
              className={value === 1 ? active : notActive}
              onClick={() => setValue(1)}
              aria-current="page"
            >
              Home
            </div>
          </Link>

          <Link href="/coming-soon">
            <div
              className={value === 2 ? active : notActive}
              onClick={() => setValue(2)}
            >
              Project List
            </div>
          </Link>

          <DropDown
            value={value}
            setValue={setValue}
            active={active}
            handleClose={() => {}}
            notActive={notActive}
          />
          <Link href="/coming-soon">
            <div
              className={value === 4 ? active : notActive}
              onClick={() => setValue(4)}
            >
              Community
            </div>
          </Link>
          <Link href="/exchange">
            <div
              className={value === 5 ? active : notActive}
              onClick={() => setValue(5)}
            >
              Exchange
            </div>
          </Link>
          <Link href="/coming-soon">
            <div
              className={value === 6 ? active : notActive}
              onClick={() => setValue(6)}
            >
              Marketplace
            </div>
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
            <div
              className={value === 8 ? active : notActive}
              onClick={() => setValue(8)}
            >
              Submit Project
            </div>
          </Link>
          <div className="bg-gradient-to-r p-[11px] from-[#ccf7ff] to-[#1295bd] -skew-x-12 hidden xl:block relative">
            <input
              className="bg-black px-5 py-[0.55rem] text-white relative"
              type="search"
              name="search"
              placeholder="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <ul className="absolute skew-x-12 bg-white w-64 mx-[2px] mt-3">
              <li className=" p-2 border-b-2 cursor-pointer">Haseeb</li>
              <li className=" p-2 border-b-2">Haseeb</li>
              <li className=" p-2 border-b-2">Haseeb</li>
            </ul>
          </div>

          <i className="fas fa-search text-white font-bold relative right-[65px] cursor-text hidden xl:block"></i>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
