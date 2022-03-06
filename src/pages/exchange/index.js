import CrytoExchangeTable from "components/UI/cryptoExchangeTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangePageSmallCard from "components/UI/exchangePageSmallCard";

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
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover px-16 pt-28">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <ExchangePageSmallCard Coins={coins} />
        </div>
        <CrytoExchangeTable Coins={coins} />
      </div>
    </div>
  );
};

export default Exchange;
