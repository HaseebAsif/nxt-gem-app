import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";

const MoreNXTGemStories = ({ allPost, articleSlug, slides }) => {
  const [moreStories, setMoreStories] = useState({});
  const [moreStoriesText, setMoreStoriesText] = useState([]);

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

  useEffect(() => {
    filteredSlides();
  }, [moreStories, slides]);
  const filteredSlides = () => {
    try {
      for (let index = 0; index < moreStories.slides.length; index++) {
        const element = moreStories.slides[index];
        for (let index = 0; index < slides.length; index++) {
          const elementSlide = slides[index];
          if (element._ref === elementSlide._id) {
            setMoreStoriesText((prev) => [...prev, slides[index]]);
          }
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
      <div className="container container max-w-md lg:max-w-2xl m-auto sm:mt-auto flex flex-wrap flex-col md:flex-row items-center justify-start bg-[#023844]">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row rounded h-auto sm:h-44 shadow shadow-lg">
            {moreStories.mainImage && (
              <a href={`/blog/${moreStories.slug.current}`}>
                <img
                  className="block md:h-24 md:h-40 max-w-md sm:w-52 object-cover flex-none bg-cover py-2 px-4"
                  src={imageUrlBuilding(moreStories.mainImage)}
                />
              </a>
            )}
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div>
                <h3 className="text-[#1bd6fa] font-bold text-md mb-2 leading-tight">
                  {moreStories.title && (
                    <a href={`/blog/${moreStories.slug.current}`}>
                      {moreStories.title}
                    </a>
                  )}
                </h3>
                <span className="text-[white] text-sm sm:text-md mb-2 more-nxt-gem-blog-text leading-tight">
                  {allPost && moreStoriesText && (
                    <SanityBlockContent
                      blocks={moreStoriesText[1]?.body.slice(0, 1)}
                    />
                  )}
                </span>
                <span className=" ">
                  {allPost && moreStories.slug && (
                    <a
                      href={`/blog/${moreStories.slug.current}`}
                      className="text-[white] w-fit  cursor-pointer text-[10px] hover:bg-white text-black relative top-1 p-2 border border-white bg-[#00d7fe] rounded-lg"
                    >
                      Read More
                    </a>
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
