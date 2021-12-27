import React from "react";
// SEO
import SEO from "../components/seo";

//Components
import Hero from "../components/hero";
const Top10Projects = dynamic(() => import("components/top10Projects"), {
  ssr: false,
});
import MovingHeading from "components/movingHeading";
import TopViews from "components/topViews";
import TopStories from "components/topStories";
import OurTeam from "components/ourTeam";
import OurPartners from "components/ourPartners";
import SideIcons from "components/sideSocialIcons";
import AdvertisementTop from "components/advertisementTop";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/nxtgem-io/image/upload/c_scale,w_680/v1640600879/background_app_klirup.png')] h-fit bg-no-repeat bg-cover">
      <AdvertisementTop />
      <SEO />
      <Hero />
      <SideIcons />
      <Top10Projects />
      <MovingHeading heading="AGV: ONE OF THE LARGEST PLAY-TO-EARN GUILDS. A DAO WITH PEOPLE WITH TIME AND PEOPLE WITH FUNDS WORK TOGETHER." />
      <TopViews />
      <TopStories />
      <OurTeam />
      <OurPartners />
    </div>
  );
};

export default Home;
