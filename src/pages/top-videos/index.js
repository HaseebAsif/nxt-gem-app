import FeaturedDyorSources from "components/featuredDyorSources";
import TopVideosPageMainVideo from "components/UI/topVideosPageMainVideo";
import TopVideosPageSmallCard from "components/UI/topVideosPageSmallCard";
import TopVideosPageSmallVideo from "components/UI/topVideosPageSmallVideo";
import React from "react";

const TopVideos = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] min-h-screen bg-no-repeat bg-cover p-8 pt-24 sm:p-24 lg:p-26">
      <h2 className="text-[#1bd6fa] text-4xl font-bold py-2">
        TOP <span className="text-white">VIDEOS</span>
      </h2>
      <div className="grid grid-cols-6 lg:grid-cols-12 ">
        <div className="col-span-8">
          <TopVideosPageMainVideo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 col-span-6 lg:col-span-4 pt-2 lg:pt-0">
          <TopVideosPageSmallVideo />
          <TopVideosPageSmallVideo />
          <TopVideosPageSmallVideo />
          <TopVideosPageSmallVideo />
          <TopVideosPageSmallVideo />
          <TopVideosPageSmallVideo />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="pt-4 pr-8">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            NEW <span className="text-white">STORIES</span>
          </h2>
          <TopVideosPageSmallCard />
          <TopVideosPageSmallCard />
          <TopVideosPageSmallCard />
        </div>
        <div className="pt-4">
          <h2 className="text-[#1bd6fa] text-2xl font-bold py-2">
            MOST <span className="text-white">POPULAR</span>
          </h2>
          <TopVideosPageSmallCard />
          <TopVideosPageSmallCard />
          <TopVideosPageSmallCard />
        </div>
      </div>
      <FeaturedDyorSources />
    </div>
  );
};

export default TopVideos;
