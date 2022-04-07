import React, { useState, useEffect } from "react";
import FeaturedDyorSources from "components/featuredDyorSources";
import TopVideosPageMainVideo from "components/UI/topVideosPageMainVideo";
import TopVideosPageSmallCard from "components/UI/topVideosPageSmallCard";
import TopVideosPageSmallVideo from "components/UI/topVideosPageSmallVideo";
import Slider from "react-slick";
import SideIcons from "components/sideSocialIcons";

function SampleNextArrow(props) {
  const { className, style, customClass, onClick, topStyle } = props;
  return (
    <div
      className={`topStories_page_arrow ${
        customClass && customClass
      } ${className}`}
      style={{
        ...style,
        display: "block",
        top: !topStyle ? "74.2vh" : topStyle,
        right: "2%",
        fontWeight: "bolder",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, customClass, onClick, topStyle } = props;
  return (
    <div
      className={`topStories_page_arrow ${
        customClass && customClass
      } ${className}`}
      style={{
        ...style,
        display: "block",
        top: !topStyle ? "74.2vh" : topStyle,
        left: "1%",
        fontWeight: "bolder",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

const TopVideos = () => {
  const [TopViewsData, setTopViewsData] = useState([]);
  const [mainVideo, setMainVideo] = useState("1");
  const [largeVideo, setLargeVideo] = useState([]);
  const [smallVideo, setSmallVideo] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "topViews" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setTopViewsData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  useEffect(() => {
    setLargeVideo(TopViewsData.filter((value) => value.order === mainVideo));
    setSmallVideo(TopViewsData.filter((value) => value.order !== mainVideo));
  }, [TopViewsData, mainVideo]);
  const SetMainVideoFunction = (orderProp) => {
    setMainVideo(orderProp);
  };

  const settingsSmall = {
    dots: true,
    infinite: true,
    autoplay: true,
    fadeInRight: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-custom-dots",
    nextArrow: (
      <SampleNextArrow topStyle={"100%"} customClass="slick-custom-arrows" />
    ),
    prevArrow: (
      <SamplePrevArrow topStyle={"100%"} customClass="slick-custom-arrows" />
    ),
  };

  const chunkSize = 3;
  const sliderGroup = TopViewsData.map((e, i) => {
    return i % chunkSize === 0 ? TopViewsData.slice(i, i + chunkSize) : null;
  }).filter((e) => {
    return e;
  });
  console.log(sliderGroup);
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover p-8 pt-24 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-[40px] font-bold py-2">
        TOP <span className="text-white">VIDEOS</span>
      </h2>
      <div className="grid grid-cols-6 lg:grid-cols-12 ">
        <div className="col-span-8">
          {largeVideo.map(({ link, order }) => {
            console.log(order);
            return (
              <TopVideosPageMainVideo
                videoUrl={link}
                handleClick={() => SetMainVideoFunction(order)}
                image={false}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-6 lg:col-span-4 pt-2 px-2 md:px-0 lg:pt-0">
          {smallVideo.map(({ link, order }) => (
            <TopVideosPageSmallVideo
              videoUrl={link}
              handleClick={() => SetMainVideoFunction(order)}
              image={false}
            />
          ))}
        </div>
      </div>

      <SideIcons />

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="pt-4  w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-[#1bd6fa] text-[40px] font-bold py-2 ">
            NEW <span className="text-white">VIDEOS</span>
          </h2>
          <Slider {...settingsSmall}>
            {sliderGroup
              .sort(
                (a, b) => parseFloat(b.publishedAt) - parseFloat(a.publishedAt)
              )
              .map((item, i) => {
                console.log(item);
                if (item.length % 3 === 0)
                  return (
                    <div>
                      {item.map(({ link, name, description }) => (
                        <TopVideosPageSmallCard
                          videoUrl={link}
                          Title={name}
                          Body={description}
                        />
                      ))}
                    </div>
                  );
              })}
          </Slider>
        </div>
        <div className="pt-4  w-full lg:w-1/2 ">
          <h2 className="text-[#1bd6fa] text-[40px] font-bold py-2 ">
            MOST <span className="text-white">POPULAR</span>
          </h2>
          <Slider {...settingsSmall}>
            {sliderGroup.reverse().map((item, i) => {
              if (item.length % 3 === 0)
                return (
                  <div>
                    {item
                      .slice(0, 3)
                      .reverse()
                      .map(({ link, name, description }) => (
                        <TopVideosPageSmallCard
                          videoUrl={link}
                          Title={name}
                          Body={description}
                        />
                      ))}
                  </div>
                );
            })}
          </Slider>
        </div>
      </div>
      <div className="pt-6">
        <FeaturedDyorSources />
      </div>
    </div>
  );
};

export default TopVideos;
