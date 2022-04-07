import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import styles from "./cryptoExchange.module.css";

const CrytoExchangeTable = ({ Coins }) => {
  return (
    <div
      className={`text-white col-span-9  border-none h-[630px] overflow-y-scroll ${styles.mainTableSection}`}
    >
      <Table>
        <Thead className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] text-black sticky top-0 z-10">
          <Tr>
            <Th style={{ fontWeight: 700, textAlign: "left" }} className="pl-4">
              RANKING
            </Th>
            <Th
              style={{ fontWeight: 700, textAlign: "left" }}
              className={styles.nameHeading}
            >
              NAME
            </Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>COIN</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>PRICE</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>24H VOLUME</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>24H</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>MARKET CAP</Th>
          </Tr>
        </Thead>
        <Tbody className="bg-[black]/80">
          {Coins.map((coin) => (
            <Tr
              className={styles.coinTableRow}
              key={coin.name}
              style={{ border: "none" }}
            >
              <Td className="pl-8">{coin.market_cap_rank}</Td>

              <Td className={`flex items-baseline ${styles.coinsNameSection}`}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="inline-block top-[0px] h-auto md:h-[30px] w-auto xl:w-[30px]"
                />
                {coin.name}
              </Td>
              <Td>{coin.symbol.toUpperCase()}</Td>
              <Td>${coin.current_price}</Td>
              <Td>${coin.market_cap.toLocaleString()}</Td>
              {coin.market_cap_change_percentage_24h < 0 ? (
                <Td className="text-red-400">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </Td>
              ) : (
                <Td className="text-green-400">
                  {coin.market_cap_change_percentage_24h.toFixed(2)}%
                </Td>
              )}
              <Td>{coin.total_volume.toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <br />
      {/* <GradientButton
        buttonvalue={"Load More"}
        handleClick={loadMoreProjects}
        buttondisable={buttondisable}
      /> */}
    </div>
  );
};

export default CrytoExchangeTable;
