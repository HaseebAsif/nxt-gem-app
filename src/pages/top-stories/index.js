import TopStoriesMainSlider from "components/topStoriesMainSlider";
import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "102.3%",
        right: "1%",
        fontWeight: "bolder",
        zIndex: "1",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "102.3%",
        left: "1%",
        fontWeight: "bolder",
        zIndex: "1",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}

const TopStories = () => {
  const [topStoriesData, setTopStoriesData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "post" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setTopStoriesData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] h-fit bg-no-repeat bg-cover p-8 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-4xl font-bold">
        TOP <span className="text-white">STORIES</span>
      </h2>
      <Slider {...settings}>
        {topStoriesData.map((prev, i) => {
          const { title, mainImage, body, slug } = prev;
          const imgBuilder = imageUrlBuilder({
            projectId: "cqnczxva",
            dataset: "production",
          });
          const image = imgBuilder.image(mainImage);
          console.log(prev);
          return <TopStoriesMainSlider image={image} />;
        })}
      </Slider>
    </div>
  );
};

export default TopStories;
