import React from "react";

// SEO
import SEO from "../components/seo";

const Home = () => {
  return (
    <div className="bg-[url('/assets/background_app.png')] h-[5500px] bg-no-repeat bg-cover">
      <SEO />
      <div>Hello World</div>
    </div>
  );
};

export default Home;
