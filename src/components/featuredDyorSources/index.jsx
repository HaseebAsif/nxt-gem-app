import React, { useState, useEffect } from "react";

const SingleFeaturedDyor = ({ text }) => (
  <div className="p-4 border-solid border-[#1bd6fa] border-[1px]">{text}</div>
);

const FeaturedDyorSources = () => {
  const [TopViewsData, setTopViewsData] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "featuredDYORSources" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setTopViewsData(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  console.log(TopViewsData);
  return (
    <div className="pt-4 cursor-pointer">
      <h2 className="text-[#1bd6fa] text-3xl font-bold py-2">
        FEATURED <span className="text-white">DYOR SOURCES</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-[#023844] text-white ">
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
        <SingleFeaturedDyor text="numquam nostrum debitis incidunt veritatis veniam, reprehenderit dignissimos soluta corporis omnis. Magnam dicta aliquid expedita." />
      </div>
    </div>
  );
};

export default FeaturedDyorSources;
