import CrytoExchangeTable from "components/UI/cryptoExchangeTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangePageSmallCard from "components/UI/exchangePageSmallCard";
import CryptoMovingHeading from "components/cryptoMovingHeadline";
import CoinSearchBar from "components/UI/coinSearch";

const Exchange = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    let api = axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover pt-16">
      <div className="h-10 cryptoMovingHeading bg-[#012c33] text-white ">
        <CryptoMovingHeading Coins={coins} />
      </div>
      <div className=" px-4 md:px-16">
        <div className="grid grid-cols-6 xl:grid-cols-12 pt-12">
          <div className="col-span-3 pb-2 xl:pb-0">
            <CoinSearchBar />
            <div className="pt-4">
              <ExchangePageSmallCard Coins={coins} Name={"TRENDING"} />
            </div>
            <div className="pt-2">
              <ExchangePageSmallCard Coins={coins} Name={"BIGGEST GAINERS"} />
            </div>
            <div className="pt-2">
              <ExchangePageSmallCard Coins={coins} Name={"RECENTLY ADDED"} />
            </div>
          </div>
          <CrytoExchangeTable Coins={coins} />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
