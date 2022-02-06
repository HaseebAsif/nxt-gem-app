import React from "react";
import RelatedArticleCard from "./relatedArticleCard";

const AuthorDetailSlide = () => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 border-4 border-[#023844] p-10">
        <div className=" px-0 xl:px-4">
          <div className="flex items-center justify-evenly flex-wrap py-6 px-2">
            <div>
              <img src="https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_190/v1640599415/CEO-Jo-Santos_ullpvn.png" />
            </div>
            <div className="text-center ">
              <h3 className="text-5xl">Jo Santos</h3>
              <h3 className="text-xl">AUTHOR</h3>
              <div className="flex w-28 m-auto py-2">
                <a href={""} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600818/TEAM-Facebook-Button_dgyvum.png"
                    }
                    className="w-[30px]"
                  />
                </a>
                <a href={""} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Telegram-Button_dqem53.png"
                    }
                    className="w-[30px]"
                  />
                </a>
                <a href={""} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-LinkedIn-Button_uj2gdj.png"
                    }
                    className="w-[30px]"
                  />
                </a>
                <a href={""} className="mx-1" target="_blank">
                  <img
                    src={
                      "https://res.cloudinary.com/nxtgem-io/image/upload/v1640600819/TEAM-Twitter-Button_hfn0qx.png"
                    }
                    className="w-[30px]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="px-0 py-8 xl:py-8 px-8">
            <h3 className="text-2xl">DETAILS:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              dolor maxime ipsam et omnis dignissimos ad ipsa cumque quia
              perspiciatis!
            </p>
          </div>
        </div>
        <div>
          <h3 className=" mx-0 xl:m-auto ">OTHER ARTICLES FROM THE AUTHOR</h3>
          <div className="py-2">
            <RelatedArticleCard />
          </div>
          <div className="py-2">
            <RelatedArticleCard />
          </div>
          <div className="py-2">
            <RelatedArticleCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailSlide;
