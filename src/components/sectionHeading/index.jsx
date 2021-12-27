import React from "react";

const SectionHeader = ({ heading, value }) => {
  const valueChecker = () => {
    if (value === "1") {
      return (
        <img
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_511/v1640600244/TOP-10-PROJECTS_d60rzx.png"
          className="w-[200px]  md:w-[300px] lg:w-[400px] 2xl:w-[500px] bottom-[100px] md:relative"
          alt=""
        />
      );
    } else if (value === "2") {
      return (
        <img
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_520/v1640600240/TOP-VIEWS_dgwdqp.png"
          className="w-[200px]  md:w-[300px] lg:w-[400px] 2xl:w-[500px] mb-12 sm:mb-0"
          alt=""
        />
      );
    } else if (value === "3") {
      return (
        <img
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_662/v1640600238/TOP-STORIES_aiqxaq.png"
          className="w-[200px]  md:w-[300px] lg:w-[400px] 2xl:w-[500px] mb-12"
          alt=""
        />
      );
    } else if (value === "4") {
      return (
        <img
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_631/v1640600243/OUR-TEAM_jnrupm.png"
          className="w-[200px]  md:w-[300px] lg:w-[400px] 2xl:w-[500px]"
          alt=""
        />
      );
    } else if (value === "5") {
      return (
        <img
          src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_620/v1640600236/OUR-PARTNERS_kbqi2j.png"
          className="w-[200px]  md:w-[300px] lg:w-[400px] 2xl:w-[600px]"
          alt=""
        />
      );
    }
  };
  return (
    <div className="text-center">
      {value ? (
        <div className="flex justify-center static">{valueChecker()}</div>
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
