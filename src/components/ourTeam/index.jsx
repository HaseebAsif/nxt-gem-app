import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";

import OurTeamName from "./ourTeamName";

const OurTeam = () => {
  const [OurTeamData, setOurTeamData] = useState([]);
  useEffect(() => {
    fetch("/api/ourteam")
      .then((response) => response.json())
      .then((data) => setOurTeamData(data));
  }, []);

  return (
    <div className="animate-fadeIn">
      <SectionHeader heading="Our Team" value="4" />
      <div className="grid grid-cols-1 place-items-center mx-28 sm:mx-48 lg:grid-cols-3 sm:grid-cols-2">
        {OurTeamData.map(
          ({ id, name, imgSrc, post, socialMedia, imgHoverSrc }) => (
            <div key={id} className="mt-12">
              <div className="h-[180px]">
                <img
                  src={imgSrc}
                  alt=""
                  className="max-w-[180px] drop-shadow-2xl"
                />
                <img
                  src={imgHoverSrc}
                  alt=""
                  className="max-w-[180px] relative bottom-[180px] hover:hidden drop-shadow-xl"
                />
              </div>
              <OurTeamName name={name} />
              <div className="text-white text-center text-lg mb-2">{post}</div>
              <div className="flex items-center justify-center">
                {socialMedia.map(({ icon, link }) => (
                  <a href={link} className="mx-1" target="_blank">
                    <img src={icon} alt={link} className="w-[30px]" />
                  </a>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default OurTeam;
