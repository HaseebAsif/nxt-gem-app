import React from "react";

//Components
import Navbar from "../navbar";
import Footer from "../footer";
import BackgroundCursor from "components/backgroundCursor";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BackgroundCursor />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
