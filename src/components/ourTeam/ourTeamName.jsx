import React from "react";

const OurTeamName = ({ name }) => {
  return (
    <div className="my-3">
      <div className="text-2xl text-center text-[#073b4c] font-black font-Peace Sans ourteam__name">
        {name}
      </div>
    </div>
  );
};

export default OurTeamName;
