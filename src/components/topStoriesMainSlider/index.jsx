import SanityBlockContent from "@sanity/block-content-to-react";
import React from "react";

const TopStoriesMainSlider = ({ Image, Title, body, currentSlug }) => {
  return (
    <div className="h-[74vh] bg-red-800">
      <div
        className="object-cover h-full bg-no-repeat bg-cover flex justify-end"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="h-[19.5rem] w-80 bg-[#023844] truncate whitespace-normal mr-20 p-4 py-6">
          <h3 className="text-[#1bd6fa] text-2xl">{Title}</h3>
          <p className="text-white text-lg py-6">
            <SanityBlockContent blocks={body?.slice(0, 1)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesMainSlider;
