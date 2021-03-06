import React, { useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import RelatedArticleCard from "../UI/relatedArticleCard/relatedArticleCard";

const AuthorDetailSlide = ({ author, AuthorData, setAuthorData, allPost }) => {
  const [AuthorDetails, setAuthorDetails] = useState([]);
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "author" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());

    setAuthorDetails(result.result);
  }, []);

  useEffect(() => {
    filteredData();
  }, [AuthorDetails]);
  const filteredData = () => {
    try {
      const element = author;
      for (let index = 0; index < AuthorDetails.length; index++) {
        const elementSlide = AuthorDetails[index];
        if (element._ref === elementSlide._id) {
          setAuthorData(AuthorDetails[index]);
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
      <div className="grid grid-cols-1 xl:grid-cols-2 border-4 border-[#023844] p-2  xl:px-2">
        <div className=" px-0 xl:px-4">
          <div className="flex items-center justify-evenly flex-wrap py-6 px-10">
            <div>
              {AuthorData.image && (
                <img
                  className="w-[100px] xl:w-[170px]"
                  src={imageUrlBuilding(AuthorData.image)}
                />
              )}
            </div>
            <div className="text-center ">
              <h3 className="text-xl xl:text-3xl">{AuthorData.name}</h3>
              <h3 className="text-sm xl:text-lg">AUTHOR</h3>
              <div className="flex w-28 xl:w-32 m-auto py-2">
                <a href={AuthorData.facebook} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600818/TEAM-Facebook-Button_dgyvum.png"
                    }
                    className="w-[30px] xl:w-[100px] cursor-pointer"
                  />
                </a>
                <a href={AuthorData.telegram} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Telegram-Button_dqem53.png"
                    }
                    className="w-[30px] xl:w-[100px] cursor-pointer"
                  />
                </a>
                <a href={AuthorData.linkedin} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-LinkedIn-Button_uj2gdj.png"
                    }
                    className="w-[30px] xl:w-[100px] cursor-pointer"
                  />
                </a>
                <a href={AuthorData.twitter} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Twitter-Button_hfn0qx.png"
                    }
                    className="w-[30px] xl:w-[100px] cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="px-2 py-0 xl:py-2 xl:px-8">
            <h3 className="text-md xl:text-2xl">ABOUT THE AUTHOR:</h3>
            <p className="text-[16px]">
              <SanityBlockContent blocks={AuthorData.bio} />
            </p>
          </div>
        </div>
        <div className="hidden xl:block">
          <h3 className="  mt-2 mx-auto w-fit text-sm xl:text-lg ">
            OTHER ARTICLES FROM THE AUTHOR
          </h3>
          <div className="py-2">
            <RelatedArticleCard
              allPost={allPost}
              articleSlug={AuthorData.relatedArticle1}
            />
          </div>
          <div className="py-2">
            <RelatedArticleCard
              allPost={allPost}
              articleSlug={AuthorData.relatedArticle2}
            />
          </div>
          <div className="py-2 hidden sm:block">
            <RelatedArticleCard
              allPost={allPost}
              articleSlug={AuthorData.relatedArticle3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailSlide;
