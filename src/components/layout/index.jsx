import React from "react";

//Components
import Navbar from "../navbar";
import Footer from "../footer";
import ScrollToTop from "components/scrollToTop";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
