import React from "react";

const Hero = () => {
  return (
    <div>
      <video autoplay="true" loop muted className="w-screen min-w-screen">
        <source src="https://res.cloudinary.com/nxtgem-io/video/upload/c_scale,w_752/v1640600903/hero-video_ltjqmq.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
