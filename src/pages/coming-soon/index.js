import React, { useState, useEffect } from "react";

import SectionHeader from "components/sectionHeading";
import imageUrlBuilder from "@sanity/image-url";

const ComingSoon = () => {
  const [ComingSoonProjects, setcomingSoonProjects] = useState([]);
  const [comingSoonAdvertisments, setComingSoonAdvertisments] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "comingSoonProjects" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setcomingSoonProjects(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  useEffect(async () => {
    const query = encodeURIComponent(
      `*[ _type == "comingSoonAdvertisements" ]`
    );
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setComingSoonAdvertisments(
      result.result.sort((a, b) => parseFloat(a.order) - parseFloat(b.order))
    );
  }, []);
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] h-fit bg-no-repeat bg-cover p-8 sm:p-24 lg:p-48 lg:pt-32">
      <SectionHeader heading="Coming Soon" value="6" />
      <div className="flex items-center justify-center flex-col mb-8">
        <h2 className="uppercase text-white text-2xl">Projects you may like</h2>
        <div className="flex mt-5 flex-wrap justyify-center items-center">
          {ComingSoonProjects.map(({ mainImage, name, link }) => {
            const imgBuilder = imageUrlBuilder({
              projectId: "cqnczxva",
              dataset: "production",
            });
            const image = imgBuilder.image(mainImage);
            return (
              <a
                href={link}
                key={name}
                className="mx-4 flex items-center justify-center flex-col"
              >
                <img src={image} alt={name} className="h-[45px]" />
                <div className="text-white">{name}</div>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-white">
          {comingSoonAdvertisments
            .slice(1, comingSoonAdvertisments.length)
            .map(({ mainImage, link }) => {
              const imgBuilder = imageUrlBuilder({
                projectId: "cqnczxva",
                dataset: "production",
              });
              const image = imgBuilder.image(mainImage);
              return (
                <a href={link} target="_blank" className="cursor-pointer">
                  <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="h-[200px] mt-5 flex items-center justify-center sm:mr-6 sm:mt-0 bg-cover"
                  />
                </a>
              );
            })}
          {comingSoonAdvertisments.slice(0, 1).map(({ mainImage, link }) => {
            const imgBuilder = imageUrlBuilder({
              projectId: "cqnczxva",
              dataset: "production",
            });
            const image = imgBuilder.image(mainImage);
            return (
              <a
                href={link}
                target="_blank"
                className="sm:col-span-3 cursor-pointer"
              >
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="h-[200px] mt-5 flex items-center justify-center  bg-cover"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
