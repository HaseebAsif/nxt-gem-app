import React from "react";

const TopStoriesMainSlider = ({ image }) => {
  return (
    <div className="h-[74vh] bg-red-800">
      <div
        className="object-cover h-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
};

export default TopStoriesMainSlider;
