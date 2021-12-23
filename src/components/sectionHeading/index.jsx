import React from "react";

const SectionHeader = ({ heading, value }) => {
  const valueChecker = () => {
    if (value === "1") {
      return <img src="/assets/Homepage-Assets/TOP-10-PROJECTS.png" alt="" />;
    } else if (value === "2") {
      return <img src="/assets/Homepage-Assets/TOP-VIEWS.png" alt="" />;
    } else if (value === "3") {
      return <img src="/assets/Homepage-Assets/TOP-STORIES.png" alt="" />;
    } else if (value === "4") {
      return <img src="/assets/Homepage-Assets/OUR-TEAM.png" alt="" />;
    } else if (value === "5") {
      return <img src="/assets/Homepage-Assets/OUR-PARTNERS.png" alt="" />;
    }
  };
  return (
    <div className="text-center">
      {value ? (
        <div className="flex justify-center static bottom-[100px] md:relative">
          <div className="w-11/12 md:w-1/3">{valueChecker()}</div>
        </div>
      ) : (
        <>
          <h1 className="uppercase text-4xl font-black blur-sm invert drop-shadow-xl md:text-6xl">
            {heading}
          </h1>
          <h1 className="text-4xl uppercase font-extrabold text-gray-800 relative bottom-10 md:bottom-14 md:text-6xl">
            {heading}
          </h1>
        </>
      )}
    </div>
  );
};

export default SectionHeader;
