import React from "react";

const CoinSearchBar = ({ setSearchValue }) => {
  return (
    <div className="hidden xl:block ">
      <i className="fas fa-search text-white text-sm font-bold absolute left-[78px] top-[162px] cursor-text hidden xl:block "></i>

      <div className="bg-gradient-to-r p-[5px] from-[#ccf7ff] to-[#1295bd] w-72  ">
        <input
          className="bg-black pl-8 pr-14 py-[0.15rem] pt-1 text-white "
          type="search"
          name="search"
          placeholder="Search Coin"
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default CoinSearchBar;
