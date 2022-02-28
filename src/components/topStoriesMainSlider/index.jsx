import React from "react";

const TopStoriesMainSlider = ({ image }) => {
  return (
    <div className="h-[74vh] bg-red-800">
      <div
        className="object-cover h-full bg-no-repeat bg-cover flex justify-end"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-80 w-72 bg-blue-700 mr-20"></div>
      </div>
    </div>
  );
};

export default TopStoriesMainSlider;
