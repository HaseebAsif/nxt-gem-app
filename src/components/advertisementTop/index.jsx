import React, { useState, useEffect } from "react";

import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";

const AdvertisementTop = () => {
  const [AdvertisementImage, setAdvertisementImage] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "topAdvertisement" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setAdvertisementImage(result.result);
  }, []);

  const renderSlides = () =>
    AdvertisementImage.map((item) => {
      const imgBuilder = imageUrlBuilder({
        projectId: "cqnczxva",
        dataset: "production",
      });
      const image = imgBuilder.image(item.mainImage);
      return (
        <div className="py-4 max-h-[100px]">
          <a href={item.link} target="_blank">
            <img
              src={image}
              alt=""
              className="md:w-[50vw] max-h-[90px] object-scale-down m-auto"
            />
          </a>
        </div>
      );
    });

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
