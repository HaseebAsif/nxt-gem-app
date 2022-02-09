import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";

const MoreNXTGemStories = ({ allPost, articleSlug }) => {
  const [moreStories, setMoreStories] = useState({});

  useEffect(() => {
    filteredData();
  }, [allPost, articleSlug]);
  const filteredData = () => {
    try {
      const element = articleSlug;
      for (let index = 0; index < allPost.length; index++) {
        const elementSlide = allPost[index];
        if (element === elementSlide.slug.current) {
          setMoreStories(allPost[index]);
        }
      }
    } catch (error) {}
  };
  function imageUrlBuilding(image) {
    const imgBuilder = imageUrlBuilder({
      projectId: "cqnczxva",
      dataset: "production",
    });
    const imageSrc = imgBuilder.image(image && image);
    return imageSrc;
  }
  return (
    <div>
      <div class="container container max-w-md lg:max-w-2xl m-auto sm:mt-auto flex flex-wrap flex-col md:flex-row items-center justify-start bg-[#023844]">
        <div class="w-full">
          <div class="flex flex-col xl:flex-row rounded overflow-hidden h-auto xl:h-44 shadow shadow-lg">
            {moreStories.mainImage && (
              <img
                class="block h-24 md:h-36 w-full xl:w-52 object-cover flex-none bg-cover py-2 px-4"
                src={imageUrlBuilding(moreStories.mainImage)}
              />
            )}
            <div class="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div>
                <h3 class="text-[#1bd6fa] font-bold text-md mb-2 leading-tight">
                  {moreStories.title}
                </h3>
                <span class="text-[white] text-sm sm:text-lg mb-2 leading-tight">
                  {allPost && moreStories.slug && (
                    <a href={`/blog/${moreStories.slug.current}`}>Read More</a>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreNXTGemStories;
