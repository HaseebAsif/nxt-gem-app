import React from "react";
import { Table, Thead, Tbody, Tr, Th, div } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import styles from "./exchangePageSmallCard.module.css";

const ExchangePageSmallCard = ({ Coins }) => {
  let count = 1;

  return (
    <div className="h-32 w-72 bg-black text-white overflow-hidden">
      <div
        className={`bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] text-black sticky top-0 w-fit px-4 z-10 -skew-x-[48deg] before:skew-x-[42deg] ${styles.exchangeSmallCard}`}
      >
        <div
          className={`text-black font-semibold px-2 ${styles.exchangeTitle}`}
        >
          {" "}
          TRENDING
        </div>
      </div>
      <div className="py-4">
        {Coins.map((coin) => (
          <div className="flex text-sm py-1">
            <div className="px-4 opacity-80">{count++}</div>

            <div className="flex items-center w-40">
              <img className="w-4" src={coin.image} alt="" />
              <div className="pl-3"> {coin.name}</div>
              <div className="pl-3 text-xs opacity-50">{coin.symbol}</div>
            </div>
            <div className="opacity-90 flex items-end">
              {coin.market_cap_change_percentage_24h < 0 ? (
                <div className="text-red-400 pl-10">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
              ) : (
                <div className="text-green-400 pl-10">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExchangePageSmallCard;
