import React from "react";

//Components
import Navbar from "../navbar";
import Footer from "../footer";
import BackgroundCursor from "components/backgroundCursor";
import AdvertisementTop from "components/advertisementTop";

const Layout = ({ children }) => {
  return (
    <div>
      <AdvertisementTop />
      <Navbar />
      <BackgroundCursor />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
