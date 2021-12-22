import React from "react";
import Hero from "../components/hero";
import Top10Projects from "components/top10Projects";
// SEO
import SEO from "../components/seo";
import MovingHeading from "components/movingHeading";
import TopStories from "components/topstories";

const Home = () => {
  return (
    <div className="bg-[url('/assets/background_app.png')] h-[5500px] bg-no-repeat bg-cover">
      <SEO />
      <Hero />
      <Top10Projects />
      <MovingHeading heading="ONE OF THE LARGEST PLAY-TO-EARN" />
      <TopStories />
    </div>
  );
};

export default Home;
