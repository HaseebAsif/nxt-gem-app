import React, { useEffect, useState } from "react";

import imageUrlBuilder from "@sanity/image-url";
import SectionHeader from "components/sectionHeading";
import Fade from "react-reveal/Fade";
import { Carousel } from "components/3d-slider";

const Top10Projects = () => {
  const [TopTenProjectsData, setTopTenProjectsData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "toptenprojects" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setTopTenProjectsData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  let slides = TopTenProjectsData.map(({ imgAlt, mainImage, link }) => {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const image = imgBuilder.image(mainImage);
    return (
      <a href={link} target="_blank">
        <img src={image} alt={imgAlt} />
      </a>
    );
  });

  return (
    <Fade left>
      <div className="mb-16 sm:mb-0 h-full">
        <SectionHeader heading="Top 10 Projects" value="1" />
        <div className="mt-12 sm:mt-[-80px]">
          <Carousel slides={slides} autoPlay />
        </div>
      </div>
    </Fade>
  );
};

export default Top10Projects;
