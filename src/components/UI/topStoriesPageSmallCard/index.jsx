import React from "react";

const TopStoriesPageSmallCard = ({ Title, Image, body }) => {
  return (
    <div>
      <div class="container container m-auto flex flex-wrap md:flex-row items-center justify-start bg-[#023844]">
        <div class="w-full">
          <div class="flex flex-row rounded overflow-hidden h-auto xl:h-40  shadow shadow-lg">
            <img
              class="block h-28 w-32 xl:w-40 xl:h-auto object-cover  flex-none bg-c over p-4"
              src={Image}
            />
            <div class="rounded-b lg:rounded-b-none lg:rounded-r pt-4 pr-2 flex flex-col justify-between leading-normal">
              <div>
                <h3 class="text-[#1bd6fa] font-bold text-md xl:text-xl mb-0 xl:mb-2 leading-tight">
                  {Title}
                </h3>
                <p class="text-[white] text-sm mb-2 leading-tight">
                  <a>Read More </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesPageSmallCard;
