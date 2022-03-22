import React from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Link from "next/link";

const TopStoriesPageSmallCard = ({ Title, Image, body, currentSlug }) => {
  return (
    <Link href={`/blog/${currentSlug}`}>
      <div className="container container m-auto flex flex-wrap md:flex-row items-center justify-start bg-black cursor-pointer">
        <div className="w-full">
          <div className="flex flex-row rounded overflow-hidden h-auto xl:h-40  shadow shadow-lg">
            <img
              className="block h-28 w-32 xl:w-40 xl:h-auto object-cover  flex-none bg-c over p-4"
              src={Image && Image}
            />
            <div className="rounded-b lg:rounded-b-none lg:rounded-r pt-4 mr-[20px] flex flex-col justify-between leading-normal">
              <div>
                <h3 className="text-[#1bd6fa] font-bold text-sm md:text-md xl:text-xl mb-0 xl:mb-2 leading-tight">
                  {Title}
                </h3>
                <div className="text-white text-xs md:text-sm h-12 md:h-14 overflow-hidden">
                  <SanityBlockContent blocks={body?.slice(0, 1)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopStoriesPageSmallCard;
