import React from "react";

const TopStoriesMainSlider = ({ image }) => {
  return (
    <div className="h-[74vh] bg-red-800">
      <img className="object-cover h-[74vh] w-screen" src={image} />
    </div>
  );
};

export default TopStoriesMainSlider;
