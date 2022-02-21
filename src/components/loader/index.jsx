import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <img
        className="bg-contain bg-black bg-no-repeat md:bg-cover"
        src="https://res.cloudinary.com/nxtgem-io/image/upload/v1645442560/loader_oy5gnb.gif"
      />
    </div>
  );
};

export default Loader;
