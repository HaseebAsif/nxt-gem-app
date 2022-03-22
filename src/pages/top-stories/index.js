import TopStoriesMainSlider from "components/topStoriesMainSlider";
import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";
import TopStoriesPageSmallCard from "components/UI/topStoriesPageSmallCard";
import FeaturedDyorSources from "components/featuredDyorSources";

function SampleNextArrow(props) {
  const { className, style, onClick, topStyle } = props;
  return (
    <div
      className={`topStories_page_arrow ${className}`}
      style={{
        ...style,
        display: "block",
        top: !topStyle ? "74vh" : topStyle,
        right: "2%",
        fontWeight: "bolder",
        zIndex: "1",
        color: "#1bd6fa",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, topStyle } = props;
  return (
    <div
      className={`topStories_page_arrow ${className}`}
      style={{
        ...style,
        display: "block",
        top: !topStyle ? "74vh" : topStyle,
        left: "1%",
        fontWeight: "bolder",
        zIndex: "1",
        color: "#1bd6fa",
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
  const imgBuilder = (imageValue) => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const image = imgBuilder.image(imageValue);
    return image;
  };

  const settings = {
    autoplay: true,
    speed: 1000,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settingsSmall = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow topStyle={"100%"} />,
    prevArrow: <SamplePrevArrow topStyle={"100%"} />,
  };

  const chunkSize = 3;
  const sliderGroup = topStoriesData
    .map((e, i) => {
      return i % chunkSize === 0
        ? topStoriesData.slice(i, i + chunkSize)
        : null;
    })
    .filter((e) => {
      return e;
    });

  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover p-8 pt-24 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-[40px] font-bold py-2">
        TOP <span className="text-white">STORIES</span>
      </h2>
      <Slider {...settings}>
        {topStoriesData.map((prev, i) => {
          const { title, mainImage, body, slug } = prev;

          return (
            <TopStoriesMainSlider
              key={i}
              index={i}
              Title={title}
              Image={mainImage && imgBuilder(mainImage)}
              body={body}
              currentSlug={slug.current}
            />
          );
        })}
      </Slider>
      <div className="flex flex-col pt-10  xl:flex-row">
        {topStoriesData.slice(0, 3).map((prev, i) => {
          const { title, mainImage, body, slug } = prev;

          return (
            <TopStoriesPageSmallCard
              key={i}
              index={i}
              Title={title}
              Image={mainImage && imgBuilder(mainImage)}
              body={body}
              currentSlug={slug.current}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="pt-4 w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-[#1bd6fa] text-[30px] font-bold py-2">
            NEW <span className="text-white">STORIES</span>
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
                      {item.map((prev) => {
                        const { title, mainImage, body, slug } = prev;
                        return (
                          <TopStoriesPageSmallCard
                            key={i}
                            index={i}
                            Title={title}
                            Image={mainImage && imgBuilder(mainImage)}
                            body={body}
                            currentSlug={slug.current}
                          />
                        );
                      })}
                    </div>
                  );
              })}
          </Slider>
        </div>
        <div className="pt-10 md:pt-4 w-full lg:w-1/2">
          <h2 className="text-[#1bd6fa] text-[30px] font-bold py-2">
            MOST <span className="text-white">POPULAR</span>
          </h2>
          <Slider {...settingsSmall}>
            {sliderGroup.reverse().map((item, i) => {
              if (item.length % 3 === 0)
                return (
                  <div>
                    {item.reverse().map((prev) => {
                      const { title, mainImage, body, slug } = prev;
                      return (
                        <TopStoriesPageSmallCard
                          key={i}
                          index={i}
                          Title={title}
                          Image={mainImage && imgBuilder(mainImage)}
                          body={body}
                          currentSlug={slug.current}
                        />
                      );
                    })}
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

export default TopStories;
