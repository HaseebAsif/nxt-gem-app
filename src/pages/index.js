import React from "react";
// SEO
import SEO from "../components/seo";

//Components
import Hero from "../components/hero";
import Top10Projects from "components/top10Projects";
import MovingHeading from "components/movingHeading";
import TopViews from "components/topViews";
import TopStories from "components/topstories";
import OurTeam from "components/ourTeam";
import OurPartners from "components/ourpartners";

const Home = () => {
  return (
    <div className="bg-[url('/assets/background_app.png')] h-fit bg-no-repeat bg-cover">
      <SEO />
      <Hero />
      <Top10Projects />
      <MovingHeading heading="ONE OF THE LARGEST PLAY-TO-EARN" />
      <TopViews />
      <TopStories />
      <OurTeam />
      <OurPartners/>
    </div>
  );
};

export default Home;
