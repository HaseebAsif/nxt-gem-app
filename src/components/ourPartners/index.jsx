import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Fade from "react-reveal/Fade";

const OurPartners = () => {
  const [PartnersData, setPartnersData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "ourPartners" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setPartnersData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  return (
    <Fade left>
      <div className="py-12 mt-24 animate-fadeIn sm:mt-0">
        <SectionHeader heading="Our Partners" value="5" />
        <div className="flex items-center justify-center flex-col flex-wrap w-full sm:flex-row min-h-[50vh] h-full">
          {PartnersData.slice(0, 6).map(({ mainImage, imgAlt, link }) => {
            const imgBuilder = imageUrlBuilder({
              projectId: "cqnczxva",
              dataset: "production",
            });
            const imgSrc = imgBuilder.image(mainImage);
            return (
              <a href={link} target="_blank" className="w-[300px] sm:w-[450px]">
                <img src={imgSrc} alt={imgAlt} />
              </a>
            );
          })}
        </div>
      </div>
    </Fade>
  );
};

export default OurPartners;
