import SectionHeader from "components/sectionHeading";
import React from "react";

import { OurTeamData } from "components/data/ourTeamData";
import OurTeamName from "./ourTeamName";

const OurTeam = () => {
  return (
    <div className="mt-16 animate-fadeIn">
      <SectionHeader heading="Our Team" value="4" />
      <div className="grid grid-cols-1 place-items-center mx-28 lg:grid-cols-3 sm:grid-cols-2">
        {OurTeamData.map(
          ({ id, name, imgSrc, post, socialMedia, imgHoverSrc }) => (
            <div key={id} className="mt-12">
              <div className="h-[220px]">
                <img src={imgHoverSrc} alt="" className="max-w-[220px]" />
                <img
                  src={imgSrc}
                  alt=""
                  className="max-w-[220px] relative bottom-[220px] hover:hidden"
                />
              </div>
              <OurTeamName name={name} />
              <div className="text-white text-center text-lg mb-2">{post}</div>
              <div className="flex items-center justify-center">
                {socialMedia.map(({ icon, link }) => (
                  <a href={link} className="mx-1">
                    <img src={icon} alt={link} className="w-[40px]" />
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
