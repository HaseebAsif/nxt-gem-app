import SectionHeader from "components/sectionHeading";
import React from "react";
import { ComingSoonData } from "components/data/comingSoonData";

const ComingSoon = () => {
  return (
    <div className="bg-[url('/assets/Homepage-Assets/Third.jpg')] h-fit bg-no-repeat mt-[60px] bg-cover p-8 sm:p-24 lg:p-48">
      <SectionHeader heading="Coming Soon" />
      <div>
        <div className="flex items-center justify-center flex-col mb-8">
          <h2 className="uppercase text-white text-2xl">
            Projects you may like
          </h2>
          <div className="flex mt-5 flex-wrap justyify-center items-center">
            {ComingSoonData.map(({ icon, name, link }) => (
              <a
                href={link}
                className="mx-4 flex items-center justify-center flex-col"
              >
                <img src={icon} alt={name} className="h-[45px]" />
                <div className="text-white">{name}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[300px] mt-5 flex items-center justify-center sm:mr-6 sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[300px] mt-5 flex items-center justify-center sm:mr-6 sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-r from-[#ccf7ff] to-[#1295bd] h-[300px] mt-5 flex items-center justify-center sm:mt-0">
            Advertisment
          </div>
          <div className="bg-gradient-to-tr from-[#ccf7ff] to-[#1295bd] h-[300px] mt-5 flex items-center justify-center sm:col-span-3">
            Advertisment
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
