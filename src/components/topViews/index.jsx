import SectionHeader from "components/sectionHeading";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import SingleSmallVideoViews from "components/singleSmallVideoViews";
import React from "react";

const TopViews = () => {
  return (
    <div>
      <div className="mt-24">
        <SectionHeader heading="Top Views" />
      </div>
      <div className="flex items-center justify-around mx-48">
        <SingleLargeVideoViews />
        <div className="flex flex-col">
          <SingleSmallVideoViews />
          <SingleSmallVideoViews />
          <SingleSmallVideoViews />
        </div>
      </div>
    </div>
  );
};

export default TopViews;
