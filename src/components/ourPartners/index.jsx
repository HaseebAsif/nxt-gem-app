import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";

const OurPartners = () => {
  const [PartnersData, setPartnersData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "ourPartners" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setPartnersData(result.result);
  }, []);
  return (
    <div className="py-12 mt-24 animate-fadeIn sm:mt-0">
      <SectionHeader heading="Our Partners" value="5" />
      <div className="flex items-center justify-center flex-col sm:flex-row h-[50vh]">
        {PartnersData.map(({ mainImage, imgAlt }) => {
          const imgBuilder = imageUrlBuilder({
            projectId: "cqnczxva",
            dataset: "production",
          });
          const imgSrc = imgBuilder.image(mainImage);
          return <img className="w-10/12 sm:w-1/4" src={imgSrc} alt={imgAlt} />;
        })}
      </div>
    </div>
  );
};

export default OurPartners;
