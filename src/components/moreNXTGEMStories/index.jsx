import React from "react";

const MoreNXTGemStories = ({ allPost, articleSlug }) => {
  return (
    <div>
      <div class="container container max-w-2xl m-auto sm:mt-auto flex flex-wrap flex-col md:flex-row items-center justify-start bg-[#023844]">
        <div class="w-full">
          <div class="flex flex-col xl:flex-row rounded overflow-hidden h-auto xl:h-44 shadow shadow-lg">
            <img
              class="block h-24 md:h-36 w-full xl:w-52 object-cover flex-none bg-cover py-2 px-4"
              src="https://pbs.twimg.com/media/DrM0nIdU0AEhG5b.jpg"
            />
            <div class="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div>
                <h3 class="text-[#1bd6fa] font-bold text-xl mb-2 leading-tight">
                  Can life make you a bitter developer?
                </h3>
                <span class="text-[white] text-sm sm:text-lg mb-2 leading-tight">
                  Read more
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
