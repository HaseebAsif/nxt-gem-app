import SectionHeader from "components/sectionHeading";
import React, { useEffect, useState } from "react";

const OurPartners = () => {
  const [PartnersData, setPartnersData] = useState([]);
  useEffect(() => {
    fetch("/api/ourpartners")
      .then((response) => response.json())
      .then((data) => setPartnersData(data));
  }, []);

  return (
    <div className="py-12 mt-24 animate-fadeIn sm:mt-0">
      <SectionHeader heading="Our Partners" value="5" />
      <div className="flex items-center justify-center flex-col sm:flex-row h-[50vh]">
        {PartnersData.map(({ imgSrc, imgAlt }) => (
          <img className="w-10/12 sm:w-1/4" src={imgSrc} alt={imgAlt} />
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
