import React, { useState, useEffect } from "react";
import FeaturedDyorSources from "components/featuredDyorSources";
import TopVideosPageMainVideo from "components/UI/topVideosPageMainVideo";
import TopVideosPageSmallCard from "components/UI/topVideosPageSmallCard";
import TopVideosPageSmallVideo from "components/UI/topVideosPageSmallVideo";

const TopVideos = () => {
  const [TopViewsData, setTopViewsData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "topViews" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setTopViewsData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  console.log(TopViewsData);
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover p-8 pt-24 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-4xl font-bold py-2">
        TOP <span className="text-white">VIDEOS</span>
      </h2>
      <div className="grid grid-cols-6 lg:grid-cols-12 ">
        <div className="col-span-8">
          {TopViewsData.slice(0, 1).map(({ link }) => (
            <TopVideosPageMainVideo videoUrl={link} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-6 lg:col-span-4 pt-2 lg:pt-0">
          {TopViewsData.slice(1, 7).map(({ link }) => (
            <TopVideosPageSmallVideo videoUrl={link} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="pt-4 pr-8">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            NEW <span className="text-white">VIDEOS</span>
          </h2>
          {TopViewsData.slice(0, 3).map(({ link, name, description }) => (
            <TopVideosPageSmallCard
              videoUrl={link}
              Title={name}
              Body={description}
            />
          ))}
        </div>
        <div className="pt-4">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            MOST <span className="text-white">POPULAR</span>
          </h2>
          {TopViewsData.slice(0, 3).map(({ link, name, description }) => (
            <TopVideosPageSmallCard
              videoUrl={link}
              Title={name}
              Body={description}
            />
          ))}
        </div>
      </div>
      <FeaturedDyorSources />
    </div>
  );
};

export default TopVideos;
