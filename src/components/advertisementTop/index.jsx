import React, { useState, useEffect } from "react";

import imageUrlBuilder from "@sanity/image-url";

const AdvertisementTop = () => {
  const [AdvertisementImage, setAdvertisementImage] = useState();
  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    fetch("/data/topAdvertisement")
      .then((response) => response.json())
      .then((data) =>
        setAdvertisementImage(imgBuilder.image(data[0].mainImage))
      );
  }, []);
  return (
    <div className="h-fill bg-[#0398b6] mt-[60px]">
      <div className="flex justify-center align-center py-4">
        <a href="https://www.mimirquiz.com/" target="_blank">
          <img src={AdvertisementImage} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AdvertisementTop;
