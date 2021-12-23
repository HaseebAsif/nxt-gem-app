import React from "react";

const OurTeamName = ({ name }) => {
  return (
    <div className="relative top-[10px]">
      <div className="text-xl text-center blur-sm invert drop-shadow-xl">
        {name}
      </div>
      <div className="text-xl text-center text-white font-bold relative bottom-[28px]">
        {name}
      </div>
    </div>
  );
};

export default OurTeamName;
