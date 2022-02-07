import React from "react";

const RelatedArticleCard = () => {
  return (
    <div>
      <div class="container container max-w-xl m-auto flex flex-wrap flex-row md:flex-row items-center justify-start bg-[#023844]">
        <div class="w-full">
          <div class="flex flex-col xl:flex-row rounded overflow-hidden h-auto xl:h-36  shadow shadow-lg">
            <img
              class="block h-auto w-0 xl:w-48 object-cover  flex-none bg-cover py-2 px-4"
              src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
            />
            <div class="rounded-b lg:rounded-b-none lg:rounded-r  p-4 flex flex-col justify-between leading-normal">
              <div>
                <h3 class="text-[#1bd6fa] font-bold text-md xl:text-xl mb-0 xl:mb-2 leading-tight">
                  Can life make you a bitter developer?
                </h3>
                <p class="text-[white] text-sm mb-2 leading-tight">Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticleCard;
