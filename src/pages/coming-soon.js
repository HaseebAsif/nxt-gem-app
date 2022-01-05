import SectionHeader from "components/sectionHeading";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] h-fit bg-no-repeat bg-cover p-8 sm:p-24 lg:p-48 lg:pt-24">
      <SectionHeader heading="Coming Soon" value="6" />
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[200px] mt-5 flex items-center justify-center sm:mr-6 sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[200px] mt-5 flex items-center justify-center sm:mr-6 sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[200px] mt-5 flex items-center justify-center sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-tr from-[#ccf7ff] to-[#1295bd] h-[200px] mt-5 flex items-center justify-center sm:col-span-3">
            Advertisment
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
