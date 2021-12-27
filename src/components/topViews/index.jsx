import SectionHeader from "components/sectionHeading";
import SingleLargeVideoViews from "components/singleLargeVideoViews";
import SingleSmallVideoViews from "components/singleSmallVideoViews";
import React from "react";

const TopViews = () => {
  return (
    <div className="mb-24 sm:mb-32 animate-fadeIn">
      <div className="mt-8">
        <SectionHeader heading="Top Views" value="2" />
      </div>
      <div className="flex items-center justify-center flex-col lg:flex-row lg:mx-12 xl:mx-48">
        <SingleLargeVideoViews videoUrl="https://www.youtube.com/embed/bS3b-TdITf0" />
        <div className="lg:ml-[80px]">
          <div className="flex justify-center items-center mt-5 lg:mt-0">
            <img
              src="https://res.cloudinary.com/nxtgem-io/image/upload/v1640600233/Sponsered_rbijdc.png"
              className="object-contain"
              alt=""
            />
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:flex-col">
            <SingleSmallVideoViews videoUrl="https://www.youtube.com/embed/6Y3NLO1wt5U" />
            <SingleSmallVideoViews videoUrl="https://www.youtube.com/embed/7BzgTb8YtK4" />
            <SingleSmallVideoViews videoUrl="https://www.youtube.com/embed/4MJVrsnHZZk" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopViews;
