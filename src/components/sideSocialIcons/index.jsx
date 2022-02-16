import React from "react";
import SideIconsData from "../data/sideiconsdata";

const SideIcons = () => {
  return (
    <div>
      <div className="fixed w-8 right-2 md:right-10 top-40 md:w-12 z-50">
        {SideIconsData.map(({ icon, link }) => (
          <a href={link} className="" target="_blank">
            <img src={icon} alt={link} className="my-2" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideIcons;
