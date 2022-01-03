import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <img
        className="bg-contain bg-black bg-no-repeat md:bg-cover md:w-screen md:h-screen"
        src="/loader.gif"
      />
    </div>
  );
};

export default Loader;
