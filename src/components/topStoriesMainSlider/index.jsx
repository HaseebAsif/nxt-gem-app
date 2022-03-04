import SanityBlockContent from "@sanity/block-content-to-react";
import React from "react";
import Link from "next/link";

const TopStoriesMainSlider = ({ Image, Title, body, currentSlug }) => {
  return (
    <Link href={`/blog/${currentSlug}`}>
      <div className="h-[74vh] bg-red-800 cursor-pointer">
        <div
          className="object-cover h-full bg-no-repeat bg-cover flex justify-end"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className=" h-[16.2rem] md:h-[19.5rem] w-80 bg-[#023844] truncate whitespace-normal mr-20 p-4 py-6">
            <h3 className="text-[#1bd6fa] text-xl md:text-2xl">{Title}</h3>
            <div className="text-white text-md md:text-lg py-2 md:py-6">
              <SanityBlockContent blocks={body?.slice(0, 1)} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopStoriesMainSlider;
