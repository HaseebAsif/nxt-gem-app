import React from "react";
// SEO
import SEO from "../components/seo";

//Components
import Hero from "../components/hero";
import Top10Projects from "components/top10Projects";
import MovingHeading from "components/movingHeading";
import TopViews from "components/topViews";

const Home = () => {
  return (
    <div className="bg-[url('/assets/background_app.png')] h-[5500px] bg-no-repeat bg-cover">
      <SEO />
      <Hero />
      <Top10Projects />
      <MovingHeading/>
      <TopViews/>
    </div>
  );
};

export default Home;
