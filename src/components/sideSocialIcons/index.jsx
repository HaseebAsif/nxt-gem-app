import React from "react";
import { SideIconsData } from "../data/sideiconsdata";

const SideIcons = () => {
  return (
    <div>
      <div className="fixed w-12 right-10 top-48 hidden md:block z-50">
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
