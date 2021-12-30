import React, { useEffect, useState } from "react";

import { Carousel } from "3d-react-carousal";
import SectionHeader from "components/sectionHeading";

const Top10Projects = () => {
  const [TopTenProjectsData, setTopTenProjectsData] = useState([]);
  useEffect(() => {
    fetch("/api/toptenprojects")
      .then((response) => response.json())
      .then((data) => setTopTenProjectsData(data));
  }, []);
  let slides = [
    TopTenProjectsData.map(({ src, alt }) => <img src={src} alt={alt} />),
  ];
  return (
    <div className="mb-16 sm:mb-0 h-full">
      <SectionHeader heading="Top 10 Projects" value="1" />
      <div className="mt-12 sm:mt-[-80px]">
        <Carousel slides={slides[0]} />
      </div>
    </div>
  );
};

export default Top10Projects;
