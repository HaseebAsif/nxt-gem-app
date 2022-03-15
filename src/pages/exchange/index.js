import CrytoExchangeTable from "components/UI/cryptoExchangeTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangePageSmallCard from "components/UI/exchangePageSmallCard";
import CryptoMovingHeading from "components/cryptoMovingHeadline";
import CoinSearchBar from "components/UI/coinSearch";

const Exchange = () => {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    let api = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        setFilteredCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (searchValue === "") setFilteredCoins(coins);
    else {
      setFilteredCoins(
        coins.filter((coin) =>
          coin.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue, coins]);

  return (
    <>
      {coins && (
        <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover pt-16">
          {coins && (
            <div className="h-10 cryptoMovingHeading bg-[#012c33] text-white ">
              <CryptoMovingHeading Coins={coins && coins} />
            </div>
          )}
          <div className="pb-12 xl:pb-0 px-4 md:px-16">
            <div className="grid grid-cols-6 xl:grid-cols-12 pt-12">
              <div className="col-span-3 pb-2 xl:pb-0">
                <CoinSearchBar setSearchValue={setSearchValue} />
                <div className="pt-4">
                  <ExchangePageSmallCard
                    Coins={coins && coins}
                    Name={"TRENDING"}
                  />
                </div>
                <div className="pt-2">
                  <ExchangePageSmallCard
                    Coins={coins && coins}
                    Name={"BIGGEST GAINERS"}
                  />
                </div>
                <div className="pt-2">
                  <ExchangePageSmallCard
                    Coins={coins && coins}
                    Name={"RECENTLY ADDED"}
                  />
                </div>
              </div>
              <CrytoExchangeTable Coins={filteredCoins && filteredCoins} />
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Exchange;
