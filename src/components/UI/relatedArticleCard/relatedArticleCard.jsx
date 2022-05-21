import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";

const RelatedArticleCard = ({ allPost, articleSlug }) => {
  const [relatedData, setRelatedData] = useState({});

  useEffect(() => {
    filteredData();
  }, [allPost, articleSlug]);
  const filteredData = () => {
    try {
      const element = articleSlug;
      for (let index = 0; index < allPost.length; index++) {
        const elementSlide = allPost[index];
        if (element === elementSlide.slug.current) {
          setRelatedData(allPost[index]);
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
      <div className="container container max-w-lg m-auto flex flex-wrap flex-row md:flex-row items-center justify-start bg-[#023844]">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row rounded overflow-hidden h-auto xl:h-32  shadow shadow-lg">
            {relatedData.mainImage && (
              <a href={`/blog/${relatedData.slug.current}`}>
                <img
                  className="block h-auto max-w-lg w-0 xl:w-48 object-cover  flex-none bg-cover py-2 px-4"
                  src={imageUrlBuilding(relatedData.mainImage)}
                />
              </a>
            )}
            <div className="rounded-b lg:rounded-b-none lg:rounded-r  p-4 flex flex-col justify-between leading-normal">
              <div>
                <h3 className="text-[#1bd6fa] font-bold text-md xl:text-xl mb-0 xl:mb-2 leading-tight">
                  {relatedData.title && (
                    <a href={`/blog/${relatedData.slug.current}`}>
                      {relatedData.title}
                    </a>
                  )}
                </h3>
                <p className="text-[white] text-sm mb-2 leading-tight">
                  {allPost && relatedData.slug && (
                    <a
                      href={`/blog/${relatedData.slug.current}`}
                      className="text-[white] w-fit  cursor-pointer text-[10px] hover:bg-white text-black relative top-1 p-2 border border-white bg-[#00d7fe] rounded-lg"
                    >
                      Read More
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticleCard;
