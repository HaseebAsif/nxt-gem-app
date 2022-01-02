import React, { useEffect, useState } from "react";

import imageUrlBuilder from "@sanity/image-url";
import { Carousel } from "3d-react-carousal";
import SectionHeader from "components/sectionHeading";

const Top10Projects = () => {
  const [TopTenProjectsData, setTopTenProjectsData] = useState([]);
  useEffect(() => {
    fetch("/api/toptenprojects")
      .then((response) => response.json())
      .then((data) =>
        setTopTenProjectsData(
          data.sort(
            (a, b) => parseFloat(a.slug.current) - parseFloat(b.slug.current)
          )
        )
      );
  }, ["/api/toptenprojects"]);
  console.log(TopTenProjectsData);
  let slides = TopTenProjectsData.map(({ imgAlt, mainImage }) => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const image = imgBuilder.image(mainImage);
    return <img src={image} alt={imgAlt} />;
  });

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
