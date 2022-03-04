import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import styles from "./cryptoExchange.module.css";
// import GradientButton from "./Gradient-Button";

const CrytoExchangeTable = ({ Coins }) => {
  return (
    <div className={`text-white bg-black border-none ${styles.mainTableSection}`}>
      <Table>
        <Thead>
          <Tr>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Name</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Symbol</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Price</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Volume</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Percentage</Th>
            <Th style={{ fontWeight: 700, textAlign: "left" }}>Market Cap</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Coins.map((coin) => (
            <Tr
              className={`${styles.coinTableRow}`}
              key={coin.name}
              style={{ border: "none" }}
            >
              <Td className={`flex items-baseline ${styles.coinsNameSection}`}>
                <img
                  src={coin.image}
                  alt={coin.name}
                  height="30px"
                  width="30px"
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
