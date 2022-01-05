import React, { useState, useEffect } from "react";

import imageUrlBuilder from "@sanity/image-url";

const AdvertisementTop = () => {
  const [AdvertisementTopLink, setAdvertisementTopLink] = useState();
  const [AdvertisementImage, setAdvertisementImage] = useState();
  useEffect(async () => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const query = encodeURIComponent(`*[ _type == "topAdvertisement" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setAdvertisementImage(imgBuilder.image(result.result[0].mainImage));
    setAdvertisementTopLink(result.result[0].link);
  }, []);
  return (
    <div className="h-fill bg-[#0398b6] mt-[60px]">
      <div className="flex justify-center align-center py-4">
        <a href={AdvertisementTopLink} target="_blank">
          <img src={AdvertisementImage} alt="" />
        </a>
      </div>
    </div>
  );
};

export default AdvertisementTop;
