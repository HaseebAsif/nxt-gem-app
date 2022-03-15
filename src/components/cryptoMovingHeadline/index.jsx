import React, { useState } from "react";
import Ticker from "react-ticker";
import PageVisibility from "react-page-visibility";

const MovingHeading = ({ Coins }) => (
  <div className="px-4 flex items-center pt-1">
    <div className="flex">
      {Coins.slice(0, 10).map((item, i) => (
        <div className="flex mx-4">
          <p className="pr-2 pt-[1px]">{i + 1}.</p>
          <p className="text-lg font-thin pr-2 uppercase text-[#1295bd]">
            {item.symbol}
          </p>
          <p className="pr-2 pt-[2px]">
            {"$"}
            {item.current_price}
          </p>
          <p className="pr-2 text-xs opacity-50 pt-[6px]">
            {item.price_change_percentage_24h}%
          </p>
        </div>
      ))}
    </div>
  </div>
);

const CryptoMovingHeading = ({ Coins }) => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };
  console.log(pageIsVisible);
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && Coins && (
        <Ticker>{() => <MovingHeading Coins={Coins} />}</Ticker>
      )}
    </PageVisibility>
  );
};

export default CryptoMovingHeading;
