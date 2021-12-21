import React from "react";

const Hero = () => {
  return (
    <div>
      <video autoplay="true" loop muted className="w-auto min-w-screen">
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
