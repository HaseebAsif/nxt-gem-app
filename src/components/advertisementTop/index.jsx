import React, { useState, useEffect } from "react";

const AdvertisementTop = () => {
  const [AdvertisementData, setAdvertisementData] = useState({});
  useEffect(() => {
    fetch("/api/advertisements")
      .then((response) => response.json())
      .then((data) => setAdvertisementData(data[0]));
  }, []);

  return (
    <div className="h-fill bg-[#0398b6] mt-[60px]">
      <div className="flex justify-center align-center py-4">
        <a href="https://www.mimirquiz.com/" target="_blank">
          <img src={AdvertisementData.homePageTopAd} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AdvertisementTop;
