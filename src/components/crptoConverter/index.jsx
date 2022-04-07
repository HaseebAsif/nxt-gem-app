import React, { useEffect, useState } from "react";
let FirstnitialValue;
let SecondInitialValue;
const CryptoConverter = ({ Coins }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions2, setShowOptions2] = useState(false);
  const [firstInputId, setFirstInputId] = useState("bitcoin");
  const [filteredFirstData, setFilteredFirstData] = useState(FirstnitialValue);
  const [secondInputId, setSecondInputId] = useState("ethereum");
  const [filteredSecondData, setFilteredSecondData] =
    useState(SecondInitialValue);
  const [firstInputChange, setFirstInputChange] = useState(1);
  const [secondInputChange, setSecondInputChange] = useState(1);

  useEffect(() => {
    setFilteredSecondData(Coins.find((item) => item.id === secondInputId));
  }, [secondInputId, Coins]);
  useEffect(() => {
    setFilteredFirstData(Coins.find((item) => item.id === firstInputId));
  }, [firstInputId, Coins]);

  const handleChangeArrow = () => {
    const temp = filteredFirstData;
    setFilteredFirstData(filteredSecondData);
    setFilteredSecondData(temp);
  };

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
          {filteredFirstData && (
            <div className="flex">
              <img
                src={filteredFirstData.image}
                alt={filteredFirstData.name}
                className="inline-block top-[0px] h-[20px] w-auto xl:w-[20px]"
              />
              <p className="pl-2">{filteredFirstData.symbol.toUpperCase()}</p>
            </div>
          )}
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
        <input
          className="bg-transparent w-32 text-xl px-2 outline-none"
          type="number"
          value={firstInputChange}
          onChange={(e) => setFirstInputChange(e.target.value)}
        />

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
              <li
                className="flex py-1"
                onClick={() => setFirstInputId(item.id)}
              >
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
        <i
          className="fa-solid fa-arrow-right-arrow-left cursor-pointer"
          onClick={handleChangeArrow}
        ></i>
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
          {filteredSecondData && (
            <div className="flex">
              <img
                src={filteredSecondData.image}
                alt={filteredSecondData.name}
                className="inline-block top-[0px] h-[20px] w-auto xl:w-[20px]"
              />
              <p className="pl-2">{filteredSecondData.symbol.toUpperCase()}</p>
            </div>
          )}
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
        {filteredFirstData && (
          <input
            className="bg-transparent w-32 text-xl px-2 outline-none"
            value={
              (filteredFirstData.current_price * firstInputChange) /
              filteredSecondData.current_price
            }
            disabled
            onChange={(e) => setSecondInputChange(e.target.value)}
          />
        )}

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
              <li
                className="flex py-1"
                onClick={() => setSecondInputId(item.id)}
              >
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

FirstnitialValue = {
  ath: 69045,
  ath_change_percentage: -37.13292,
  ath_date: "2021-11-10T14:24:11.849Z",
  atl: 67.81,
  atl_change_percentage: 63912.78538,
  atl_date: "2013-07-06T00:00:00.000Z",
  circulating_supply: 19005200,
  current_price: 43432,
  fully_diluted_valuation: 911858349625,
  high_24h: 45193,
  id: "bitcoin",
  image:
    "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
  last_updated: "2022-04-07T10:50:39.129Z",
  low_24h: 42867,
  market_cap: 825240490776,
  market_cap_change_24h: -33881925685.926514,
  market_cap_change_percentage_24h: -3.94378,
  market_cap_rank: 1,
  max_supply: 21000000,
  name: "Bitcoin",
  price_change_24h: -1760.938207568448,
  price_change_percentage_24h: -3.89648,
  roi: null,
  symbol: "btc",
  total_supply: 21000000,
  total_volume: 29887746480,
};
SecondInitialValue = {
  ath: 4878.26,
  ath_change_percentage: -33.86394,
  ath_date: "2021-11-10T14:24:19.604Z",
  atl: 0.432979,
  atl_change_percentage: 745037.79367,
  atl_date: "2015-10-20T00:00:00.000Z",
  circulating_supply: 120279552.249,
  current_price: 3222.86,
  fully_diluted_valuation: null,
  high_24h: 3324.93,
  id: "ethereum",
  image:
    "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
  last_updated: "2022-04-07T11:16:39.708Z",
  low_24h: 3149.93,
  market_cap: 387433865482,
  market_cap_change_24h: -12676670537.308716,
  market_cap_change_percentage_24h: -3.16829,
  market_cap_rank: 2,
  max_supply: null,
  name: "Ethereum",
  price_change_24h: -78.395579029022,
  price_change_percentage_24h: -2.37472,
  roi: {
    times: 98.06754442363105,
    currency: "btc",
    percentage: 9806.754442363106,
  },
  symbol: "eth",
  total_supply: null,
  total_volume: 21064363105,
};
