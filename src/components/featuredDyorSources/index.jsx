import React, { useState, useEffect } from "react";

const SingleFeaturedDyor = ({ text, link }) => (
  <div className="p-4 border-solid border-[#1bd6fa] border-[1px] ">
    <div>{text}</div>
    <div className="flex justify-end">
      <a
        href={link}
        target="_blank"
        className="text-[white] w-fit  cursor-pointer text-[10px] hover:bg-white text-black relative top-1 p-2 border border-white bg-[#00d7fe] rounded-lg"
      >
        <a>Read More</a>
      </a>
    </div>
  </div>
);

const FeaturedDyorSources = () => {
  const [DYORSources, setDYORSources] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "featuredDYORSources" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setDYORSources(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  console.log(DYORSources);
  return (
    <div className="pt-4 cursor-default">
      <h2 className="text-[#1bd6fa] text-[40px] font-bold py-2">
        FEATURED <span className="text-white">DYOR SOURCES</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-black text-white ">
        {DYORSources.map(({ name, link }) => (
          <SingleFeaturedDyor text={name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDyorSources;
