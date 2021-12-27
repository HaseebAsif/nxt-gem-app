import React from "react";

import { Carousel } from "3d-react-carousal";
import SectionHeader from "components/sectionHeading";
import { TopTenProjectsData } from "components/data/topTenProjects";

const Top10Projects = () => {
  let slides = [...TopTenProjectsData];
  return (
    <div className="mb-16 sm:mb-0 h-full">
      <SectionHeader heading="Top 10 Projects" value="1" />
      <div className="mt-12 sm:mt-[-80px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Top10Projects;
