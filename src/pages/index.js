import React from "react";
// SEO
import SEO from "../components/seo";

//Components
import Hero from "../components/hero";
import Top10Projects from "components/top10Projects";
import MovingHeading from "components/movingHeading";
import TopViews from "components/topViews";
import TopStories from "components/topstories";

const Home = () => {
  return (
    <div className="bg-[url('/assets/background_app.png')] h-[5500px] bg-no-repeat bg-cover">
      <SEO />
      <Hero />
      <Top10Projects />
      <MovingHeading heading="ONE OF THE LARGEST PLAY-TO-EARN" />
      <TopStories />
      <TopViews />
    </div>
  );
};

export default Home;
