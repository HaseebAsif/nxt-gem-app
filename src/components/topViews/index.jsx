import SectionHeader from "components/sectionHeading";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import SingleSmallVideoViews from "components/singleSmallVideoViews";
import React from "react";

const TopViews = () => {
  return (
    <div className="mb-24 sm:mb-48 animate-fadeIn">
      <div className="mt-24">
        <SectionHeader heading="Top Views" value="2" />
      </div>
      <div className="flex items-center justify-around flex-col lg:flex-row lg:mx-12 xl:mx-48">
        <SingleLargeVideoViews />
        <div>
          <div className="flex justify-center items-center mt-5 lg:mt-0">
            <img
              src="/assets/Homepage-Assets/Sponsered.png"
              className="object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:flex-col">
            <SingleSmallVideoViews />
            <SingleSmallVideoViews />
            <SingleSmallVideoViews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopViews;
