import React, { useEffect, useState } from "react";

const Hero = () => {
  const [MainVideo, setMainVideo] = useState();
  useEffect(async () => {
    const query = encodeURIComponent(`*[ _type == "mainVideo" ]`);
    const url = `https://cqnczxva.api.sanity.io/v1/data/query/production?query=${query}`;

    const result = await fetch(url).then((res) => res.json());
    setMainVideo(result.result[0].linkVideo);
  }, []);
  console.log(MainVideo);
  return (
    <div>
      {MainVideo && (
        <video autoplay="true" loop muted className="w-screen min-w-screen">
          <source src={MainVideo} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Hero;
