import React from "react";
import { SideIconsData } from "../data/sideiconsdata";

const SideIcons = () => {
  return (
    <div>
      <div className="fixed w-12 right-10 top-48 hidden md:block">
        {SideIconsData.map(({ icon, link }) => (
          <a href={link} className="">
            <img src={icon} alt={link} className="my-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideIcons;
