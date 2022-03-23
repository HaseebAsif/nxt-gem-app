import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";
import TopVideosPageSmallVideo from "../topVideosPageSmallVideo";

const TopVideosPageSmallCard = ({ Title, videoUrl, Body, currentSlug }) => {
  return (
    <div className="container container m-auto flex flex-wrap md:flex-row  items-center justify-start bg-black cursor-pointer">
      <div className="w-full">
        <div className="flex flex-row rounded p-[15px] overflow-hidden h-auto  xl:h-48  shadow shadow-lg">
          <div className="block w-32 xl:w-56 object-cover h-32 flex-none">
            <TopVideosPageSmallVideo videoUrl={videoUrl} />
          </div>
          <div className="rounded-b px-6 lg:rounded-b-none lg:rounded-r pt-4 px-2 flex flex-col justify-between leading-normal">
            <div>
              <h3 className="text-[#1bd6fa] font-bold text-sm md:text-md xl:text-xl mb-0 xl:mb-2 leading-tight">
                {Title}
              </h3>
              <p className="text-white  text-xs md:text-sm h-12 md:h-14 overflow-hidden">
                {Body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVideosPageSmallCard;
