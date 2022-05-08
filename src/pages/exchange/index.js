import CrytoExchangeTable from "components/UI/cryptoExchangeTable";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangePageSmallCard from "components/UI/exchangePageSmallCard";
import CryptoMovingHeading from "components/cryptoMovingHeadline";
import CoinSearchBar from "components/UI/coinSearch";
import CryptoConverter from "components/crptoConverter";
import SideIcons from "components/sideSocialIcons";
import ExchangePageAdd from "components/exchangePageAdd";
import Slider from "react-slick";
import Head from "next/head";

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fadeInRight: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Head>
        <title>Exchange | NXTGEM</title>
      </Head>
      {coins && (
        <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen xl:h-[120vh] bg-no-repeat bg-cover pt-16">
          {coins && (
            <div className="h-10 cryptoMovingHeading bg-[#012c33] text-white 3xl:hidden ">
              <CryptoMovingHeading Coins={coins && coins} />
            </div>
          )}
          <SideIcons />

          <div className="pb-12 xl:pb-0 px-4 md:px-24">
            <div className="grid grid-cols-6 xl:grid-cols-12 pt-12">
              <div className="col-span-6 xl:col-span-3 pb-2 xl:pb-0">
                <div className="pb-2">
                  <CoinSearchBar setSearchValue={setSearchValue} />
                </div>
                <div>
                  <CryptoConverter Coins={coins} />
                </div>
                <Slider {...settings}>
                  <div className="pt-4">
                    <ExchangePageSmallCard
                      Coins={coins && coins}
                      Name={"TRENDING"}
                    />
                  </div>
                  <div className="mx-auto pt-4">
                    <ExchangePageAdd />
                  </div>
                </Slider>
                <Slider {...settings}>
                  <div className="pt-2">
                    <ExchangePageSmallCard
                      Coins={coins && coins}
                      Name={"BIGGEST GAINERS"}
                    />
                  </div>
                  <div className="mx-auto pt-2">
                    <ExchangePageAdd />
                  </div>
                </Slider>
                <Slider {...settings}>
                  <div className="pt-2">
                    <ExchangePageSmallCard
                      Coins={coins && coins}
                      Name={"RECENTLY ADDED"}
                    />
                  </div>
                  <div className="mx-auto pt-2">
                    <ExchangePageAdd />
                  </div>
                </Slider>
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
