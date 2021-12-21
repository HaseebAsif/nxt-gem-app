import React from "react";

const SectionHeader = ({ heading }) => {
  return (
    <div className="text-center">
      <h1 className="uppercase text-4xl font-black blur-sm invert drop-shadow-xl md:text-6xl">
        {heading}
      </h1>
      <h1 className="text-4xl uppercase font-extrabold text-gray-800 relative bottom-10 md:bottom-14 md:text-6xl">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeader;
