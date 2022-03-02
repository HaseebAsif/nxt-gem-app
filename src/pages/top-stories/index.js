import TopStoriesMainSlider from "components/topStoriesMainSlider";
import React, { useState, useEffect } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Slider from "react-slick";
import TopStoriesPageSmallCard from "components/UI/topStoriesPageSmallCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`topStories_page_arrow ${className}`}
      style={{
        ...style,
        display: "block",
        top: "75vh",
        right: "1%",
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
  const { className, style, onClick } = props;
  return (
    <div
    className={`topStories_page_arrow ${className}`}

      style={{
        ...style,
        display: "block",
        top: "75vh",
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover p-8 pt-24 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-4xl font-bold py-2">
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
              Image={imgBuilder(mainImage)}
              body={body}
              currentSlug={slug.current}
            />
          );
        })}
      </Slider>
      <div className="flex flex-col pt-10 xl:flex-row">
        {topStoriesData.map((prev, i) => {
          const { title, mainImage, body, slug } = prev;

          console.log(body);
          return (
            <TopStoriesPageSmallCard
              key={i}
              index={i}
              Title={title}
              Image={imgBuilder(mainImage)}
              body={body}
              currentSlug={slug.current}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap">
        <div className="pt-4 pr-8">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            NEW <span className="text-white">STORIES</span>
          </h2>
          {topStoriesData.map((prev, i) => {
            const { title, mainImage, body, slug } = prev;

            console.log(body);
            return (
              <TopStoriesPageSmallCard
                key={i}
                index={i}
                Title={title}
                Image={imgBuilder(mainImage)}
                body={body}
                currentSlug={slug.current}
              />
            );
          })}
        </div>
        <div className="pt-4">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            MOST <span className="text-white">POPULAR</span>
          </h2>
          {topStoriesData.map((prev, i) => {
            const { title, mainImage, body, slug } = prev;

            console.log(body);
            return (
              <TopStoriesPageSmallCard
                key={i}
                index={i}
                Title={title}
                Image={imgBuilder(mainImage)}
                body={body}
                currentSlug={slug.current}
              />
            );
          })}
        </div>
      </div>
      <div className="pt-4 ">
        <h2 className="text-[#1bd6fa] text-3xl font-bold py-2">
          FEATURED <span className="text-white">DYOR SOURCES</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-[#023844] text-white ">
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
          <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            veniam officiis expedita harum. Fuga nihil voluptatum, cum corrupti
            alias expedita!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStories;
