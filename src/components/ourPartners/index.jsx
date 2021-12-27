import SectionHeader from "components/sectionHeading";
import React from "react";

const OurPartners = () => {
  return (
    <div className="py-12 mt-24 animate-fadeIn sm:mt-0">
      <SectionHeader heading="Our Partners" value="5" />
      <div className="flex flex-row items-center justify-center h-[50vh]">
        <img
          className="w-1/4"
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_601/v1640616417/MIMIR_lqufym.png"
          alt=""
        />
             <img
          className="w-1/4"
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_681/v1640616416/AGV_h93etd.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default OurPartners;
