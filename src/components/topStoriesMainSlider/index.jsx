import React from "react";

const TopStoriesMainSlider = ({ Image, Title, body, currentSlug }) => {
  return (
    <div className="h-[74vh] bg-red-800">
      <div
        className="object-cover h-full bg-no-repeat bg-cover flex justify-end"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="h-80 w-80 bg-[#023844] mr-20 p-4 py-6">
          <h3 className="text-[#1bd6fa] text-2xl">{Title}</h3>
          <p className="text-white text-lg py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            sint assumenda consequuntur ducimus in expedita quam est ipsum odio
            beatae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesMainSlider;
