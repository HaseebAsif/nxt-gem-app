import React, { useState, useEffect } from "react";

import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";

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

  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div className="py-4">
        <a href={AdvertisementTopLink} target="_blank">
          <img
            src={AdvertisementImage}
            alt=""
            className="md:w-[50vw] max-h-[90px] object-scale-down m-auto"
          />
        </a>
      </div>
    ));

  return (
    <div className="h-full bg-[#0398b6] mt-[60px]">
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default AdvertisementTop;
